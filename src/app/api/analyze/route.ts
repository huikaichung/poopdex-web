import { NextRequest, NextResponse } from 'next/server';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const BRISTOL_COMMENTS: Record<number, string[]> = {
  1: [
    "這些小傢伙比較害羞，需要多喝水才會順暢出場！",
    "便秘界的堅果派對！多吃點纖維吧～",
  ],
  2: [
    "快到了！再多一點水和蔬菜就完美了。",
    "有點結實，像在做重訓的便便。",
  ],
  3: [
    "不錯喔！再滑順一點就滿分了。",
    "8/10，加點水果會更完美！",
  ],
  4: [
    "完美的便便！你的腸道值得一座獎盃 🏆",
    "THE PERFECT POOP! 黃金標準達成！",
  ],
  5: [
    "輕飄飄的～可能需要多一點纖維。",
    "有點太 chill 了，纖維可以幫忙固定。",
  ],
  6: [
    "哇！有點急躁喔，慢慢來～",
    "腸道在開派對，但音樂太吵了。",
  ],
  7: [
    "緊急狀況！多喝水，好好休息。",
    "建議今天別離馬桶太遠...",
  ],
};

const SPECIAL_COMMENTS: Record<string, string> = {
  '金針菇': 'See you tomorrow! 👋',
  '玉米': '玉米：任務失敗，下次再來！🌽',
  '辣椒': 'Ring of fire! 🔥',
};

const BRISTOL_NAMES: Record<number, string> = {
  1: '堅果軍團',
  2: '香腸石頭',
  3: '裂紋香腸',
  4: '完美香蕉',
  5: '軟泡泡',
  6: '泥漿怪',
  7: '水龍捲',
};

export async function POST(request: NextRequest) {
  try {
    const { image } = await request.json();
    
    if (!image) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Extract base64 from data URL
    const base64 = image.replace(/^data:image\/\w+;base64,/, '');

    // If no API key, return mock result
    if (!OPENAI_API_KEY) {
      return NextResponse.json(mockAnalysis());
    }

    // Call OpenAI GPT-4V
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are PoopDex, a funny poop health analyzer. 
Analyze the image and return JSON:
{
  "bristolType": 1-7 (Bristol Stool Scale),
  "healthScore": 0-100,
  "detectedItems": ["金針菇", "玉米"] or [],
  "rawComment": "short funny comment"
}
Return ONLY valid JSON.`,
          },
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: `data:image/jpeg;base64,${base64}` },
              },
              { type: 'text', text: 'Analyze this!' },
            ],
          },
        ],
        max_tokens: 200,
      }),
    });

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    
    if (!content) {
      return NextResponse.json(mockAnalysis());
    }

    const parsed = JSON.parse(content);
    
    // Build final result
    const bristolType = parsed.bristolType || 4;
    let comment = parsed.rawComment || randomComment(bristolType);
    
    // Add special item comment
    for (const item of parsed.detectedItems || []) {
      if (SPECIAL_COMMENTS[item]) {
        comment += ` ${SPECIAL_COMMENTS[item]}`;
        break;
      }
    }

    return NextResponse.json({
      bristolType,
      funName: BRISTOL_NAMES[bristolType] || '神秘便便',
      healthScore: parsed.healthScore || calculateScore(bristolType),
      comment,
      detectedItems: parsed.detectedItems || [],
    });
  } catch (error) {
    console.error('Analysis error:', error);
    return NextResponse.json(mockAnalysis());
  }
}

function mockAnalysis() {
  const bristolType = Math.floor(Math.random() * 7) + 1;
  return {
    bristolType,
    funName: BRISTOL_NAMES[bristolType],
    healthScore: calculateScore(bristolType),
    comment: randomComment(bristolType),
    detectedItems: Math.random() > 0.7 ? ['金針菇'] : [],
  };
}

function calculateScore(type: number): number {
  if (type === 4) return 90 + Math.floor(Math.random() * 10);
  if (type === 3 || type === 5) return 70 + Math.floor(Math.random() * 15);
  if (type === 2 || type === 6) return 45 + Math.floor(Math.random() * 20);
  return 25 + Math.floor(Math.random() * 20);
}

function randomComment(type: number): string {
  const comments = BRISTOL_COMMENTS[type] || BRISTOL_COMMENTS[4];
  return comments[Math.floor(Math.random() * comments.length)];
}
