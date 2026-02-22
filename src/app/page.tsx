'use client';

import { useState, useRef } from 'react';
import styles from './page.module.css';

type AnalysisResult = {
  bristolType: number;
  funName: string;
  healthScore: number;
  comment: string;
  detectedItems: string[];
};

const BRISTOL_INFO: Record<number, { emoji: string; name: string; health: string }> = {
  1: { emoji: '🥜', name: '堅果軍團', health: '嚴重便秘' },
  2: { emoji: '🪨', name: '香腸石頭', health: '輕微便秘' },
  3: { emoji: '🌭', name: '裂紋香腸', health: '正常' },
  4: { emoji: '🍌', name: '完美香蕉', health: '理想狀態' },
  5: { emoji: '🫧', name: '軟泡泡', health: '缺乏纖維' },
  6: { emoji: '💩', name: '泥漿怪', health: '輕微腹瀉' },
  7: { emoji: '💧', name: '水龍捲', health: '腹瀉' },
};

export default function Home() {
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setImage(event.target?.result as string);
      setResult(null);
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    if (!image) return;
    
    setAnalyzing(true);
    
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image }),
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Analysis failed:', error);
      // Mock result for demo
      setResult({
        bristolType: 4,
        funName: '完美香蕉',
        healthScore: 95,
        comment: '完美的便便！你的腸道值得一座獎盃 🏆',
        detectedItems: [],
      });
    } finally {
      setAnalyzing(false);
    }
  };

  const reset = () => {
    setImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const share = async () => {
    if (!result) return;
    
    const text = `我的便便是 ${result.funName}！健康分數 ${result.healthScore} 分 💩\n${result.comment}\n\n#PoopDex #便便圖鑑`;
    
    if (navigator.share) {
      await navigator.share({ text });
    } else {
      await navigator.clipboard.writeText(text);
      alert('已複製到剪貼簿！');
    }
  };

  return (
    <main className={styles.main}>
      {/* Header */}
      <header className={styles.header}>
        <span className={styles.logo}>💩</span>
        <h1 className={styles.title}>PoopDex</h1>
        <p className={styles.subtitle}>把上廁所變成一場冒險</p>
      </header>

      {/* Upload Section */}
      {!image && (
        <section className={styles.uploadSection}>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileSelect}
            className={styles.fileInput}
            id="photo-input"
          />
          <label htmlFor="photo-input" className={styles.uploadButton}>
            <span className={styles.uploadIcon}>📸</span>
            <span className={styles.uploadText}>拍攝或上傳便便</span>
            <span className={styles.uploadHint}>AI 會幫你分析健康狀況</span>
          </label>
        </section>
      )}

      {/* Preview & Analyze */}
      {image && !result && (
        <section className={styles.previewSection}>
          <img src={image} alt="Preview" className={styles.preview} />
          <div className={styles.previewActions}>
            <button onClick={reset} className={styles.secondaryButton}>
              重拍
            </button>
            <button 
              onClick={analyzeImage} 
              className={styles.primaryButton}
              disabled={analyzing}
            >
              {analyzing ? '分析中...' : '🔍 開始分析'}
            </button>
          </div>
        </section>
      )}

      {/* Result */}
      {result && (
        <section className={styles.resultSection}>
          <div className={styles.resultCard}>
            <div className={styles.scoreRing} data-score={result.healthScore}>
              <span className={styles.scoreValue}>{result.healthScore}</span>
              <span className={styles.scoreLabel}>分</span>
            </div>
            
            <span className={styles.resultEmoji}>
              {BRISTOL_INFO[result.bristolType]?.emoji || '💩'}
            </span>
            <h2 className={styles.resultName}>{result.funName}</h2>
            <p className={styles.resultType}>
              Bristol Type {result.bristolType} · {BRISTOL_INFO[result.bristolType]?.health}
            </p>
          </div>

          <div className={styles.commentCard}>
            <p className={styles.comment}>"{result.comment}"</p>
          </div>

          {result.detectedItems.length > 0 && (
            <div className={styles.itemsCard}>
              <h3 className={styles.itemsTitle}>發現的東西</h3>
              <div className={styles.itemsList}>
                {result.detectedItems.map((item, i) => (
                  <span key={i} className={styles.item}>{item}</span>
                ))}
              </div>
            </div>
          )}

          <div className={styles.resultActions}>
            <button onClick={share} className={styles.shareButton}>
              📤 分享給朋友
            </button>
            <button onClick={reset} className={styles.newButton}>
              📸 再來一張
            </button>
          </div>
        </section>
      )}

      {/* Bristol Scale Reference */}
      <section className={styles.referenceSection}>
        <h2 className={styles.refTitle}>📖 便便圖鑑</h2>
        <div className={styles.refGrid}>
          {Object.entries(BRISTOL_INFO).map(([type, info]) => (
            <div key={type} className={styles.refCard}>
              <span className={styles.refEmoji}>{info.emoji}</span>
              <span className={styles.refName}>{info.name}</span>
              <span className={styles.refHealth}>{info.health}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>Made with 💩 by selfkit.art</p>
      </footer>
    </main>
  );
}
