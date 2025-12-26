"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const modules = [
    { id: 1, title: "AIとは何か？基本のキ", type: "Video", duration: "45min" },
    { id: 2, title: "プロンプトエンジニアリング入門", type: "Text", duration: "30min" },
    { id: 3, title: "安全なAIの使い方ガイド", type: "Video", duration: "60min" },
    { id: 4, title: "創造性を広げるAI活用法", type: "Video", duration: "50min" },
    { id: 5, title: "情報を整理するヒント", type: "Text", duration: "40min" },
    { id: 6, title: "未来の暮らしとAI", type: "Video", duration: "55min" },
    { id: 7, title: "倫理とAI：何が大切か", type: "Text", duration: "35min" },
    { id: 8, title: "家族で話そう：AIルール", type: "Video", duration: "25min" },
    { id: 9, title: "体験！自己分析ワークショップ", type: "Video", duration: "90min" },
];

export default function Library() {
    const router = useRouter();

    useEffect(() => {
        // Basic auth check
        const auth = localStorage.getItem('ai_labo_auth');
        if (!auth) router.push('/login');
    }, [router]);

    return (
        <div style={{ minHeight: '100vh', padding: '40px 20px' }}>
            <header className="container" style={{ marginBottom: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                    <h1 style={{ fontSize: '2rem', color: 'var(--primary)' }}>教材ライブラリ</h1>
                </Link>
            </header>

            <main className="container">
                <div className="glass-panel" style={{ padding: '30px', marginBottom: '40px', textAlign: 'center' }}>
                    <p style={{ fontSize: '1.1rem', marginBottom: '10px' }}>気になるところから見て大丈夫です</p>
                    <p style={{ color: 'var(--text-sub)' }}>全部見なくても問題ありません (合計12時間相当)</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px' }}>
                    {modules.map((m) => (
                        <div key={m.id} className="glass-panel" style={{ padding: '30px', transition: 'transform 0.2s' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '10px', fontWeight: 700, textTransform: 'uppercase' }}>
                                {m.type} • {m.duration}
                            </div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>{m.title}</h3>
                            <div style={{ height: '100px', background: 'rgba(0,0,0,0.05)', borderRadius: '10px', marginBottom: '15px' }}></div>
                            <button className="btn-glass" style={{ width: '100%', fontSize: '0.9rem' }}>
                                詳細を見る (デモ)
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
