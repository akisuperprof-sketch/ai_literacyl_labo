"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// ① 基本教材（背景を知る）
const basicModules = [
    { id: 1, title: "AIとは何か？基本のキ", type: "Video", duration: "45min" },
    { id: 2, title: "プロンプトエンジニアリング入門", type: "Text", duration: "30min" },
    { id: 3, title: "安全なAIの使い方ガイド", type: "Video", duration: "60min" },
    { id: 4, title: "創造性を広げるAI活用法", type: "Video", duration: "50min" },
    { id: 5, title: "情報を整理するヒント", type: "Text", duration: "40min" },
    { id: 6, title: "未来の暮らしとAI", type: "Video", duration: "55min" },
    { id: 7, title: "倫理とAI：何が大切か", type: "Text", duration: "35min" },
    { id: 8, title: "家族で話そう：AIルール", type: "Video", duration: "25min" },
];

const workshopModule = {
    id: 9,
    title: "体験！自己分析ワークショップ",
    type: "Video",
    duration: "90min",
    subTitle: "時間があるときだけで大丈夫です。"
};

// ② 体験教材（キャラ連動）
const characterModules = [
    {
        id: "c1",
        title: "ふりカエル",
        description: "自分を振りカエル",
        icon: "🐸",
        url: "https://my-self-analysis-app-temp-n4l989682.vercel.app/",
        isExternal: true
    },
    {
        id: "c2",
        title: "ぶんせキリン",
        description: "静かに整理してみよう",
        icon: "🦒",
        url: "https://business-research-24.vercel.app/",
        isExternal: true
    },
    {
        id: "c3",
        title: "つくレッサー",
        description: "たたき台を作ろう",
        icon: "🐼",
        url: "https://note-ai-agent-one.vercel.app/",
        isExternal: true
    },
    {
        id: "c4",
        title: "ひろげゾウ",
        description: "どう伝えるかを考えてみよう",
        icon: "🐘",
        url: "/hirogezou",
        isExternal: false
    },
];

export default function Library() {
    const router = useRouter();

    // Modal logic for external links
    const [showModal, setShowModal] = useState(false);
    const [targetUrl, setTargetUrl] = useState("");

    useEffect(() => {
        const auth = localStorage.getItem('ai_labo_auth');
        if (!auth) router.push('/login');
    }, [router]);

    const handleLinkClick = (e: React.MouseEvent, url: string, isExternal: boolean) => {
        if (isExternal) {
            e.preventDefault();
            setTargetUrl(url);
            setShowModal(true);
        }
        // If internal, standard Link behavior applies
    };

    const confirmExternal = () => {
        window.open(targetUrl, '_blank');
        setShowModal(false);
    };

    return (
        <div style={{ minHeight: '100vh', padding: '40px 20px', paddingBottom: '80px' }}>
            <header className="container" style={{ marginBottom: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                    <h1 style={{ fontSize: '2rem', color: 'var(--primary)' }}>教材ライブラリ</h1>
                </Link>
            </header>

            <main className="container">

                {/* ① 基本教材セクション */}
                <section style={{ marginBottom: '80px' }}>
                    <div style={{ marginBottom: '30px', borderLeft: '4px solid var(--primary)', paddingLeft: '15px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>① 基本教材（背景を知る）</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>参考として置いています。見なくても問題ありません。</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
                        {basicModules.map((m) => (
                            <div key={m.id} className="glass-panel" style={{ padding: '25px', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '10px', fontWeight: 700, textTransform: 'uppercase' }}>
                                    {m.type} • {m.duration}
                                </div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '15px', flex: 1 }}>{m.title}</h3>
                                <div style={{ height: '80px', background: 'rgba(0,0,0,0.03)', borderRadius: '10px', marginBottom: '15px' }}></div>
                                <button className="btn-glass" style={{ width: '100%', fontSize: '0.9rem' }}>
                                    本を開く (デモ)
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* 長時間教材 (目立たないように配置) */}
                    <div style={{ marginTop: '40px', padding: '0 20px', opacity: 0.8 }}>
                        <div className="glass-panel" style={{ padding: '25px', maxWidth: '500px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '5px' }}>{workshopModule.subTitle}</div>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '10px' }}>{workshopModule.title}</h3>
                            <div style={{ fontSize: '0.8rem', color: 'var(--primary)', marginBottom: '15px' }}>
                                {workshopModule.type} • {workshopModule.duration}
                            </div>
                            <button className="btn-glass" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
                                本を開く (デモ)
                            </button>
                        </div>
                    </div>
                </section>

                {/* ② 体験教材セクション */}
                <section>
                    <div style={{ marginBottom: '30px', borderLeft: '4px solid var(--primary-soft)', paddingLeft: '15px' }}>
                        <h2 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>② 体験教材（考えたいときに使う）</h2>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>考えたいときに使う場所です。</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
                        {characterModules.map((c) => (
                            <div key={c.id}
                                className="glass-panel"
                                style={{ padding: '30px', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.2s' }}
                                onClick={(e) => c.isExternal ? handleLinkClick(e, c.url, true) : router.push(c.url)}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{c.icon}</div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>{c.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', marginBottom: '20px' }}>{c.description}</p>
                                <div style={{ fontSize: '0.8rem', color: 'var(--primary)', opacity: 0.8 }}>
                                    {c.isExternal ? "道具をのぞいてみる ↗" : "考え方を見る"}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>

            {/* External Link Modal (Reusable) */}
            {showModal && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(5px)',
                    display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 100
                }} onClick={() => setShowModal(false)}>
                    <div className="glass-panel" style={{ padding: '40px', maxWidth: '400px', textAlign: 'center' }} onClick={e => e.stopPropagation()}>
                        <h3 style={{ marginBottom: '20px' }}>外部の道具へ移動します</h3>
                        <p style={{ marginBottom: '30px', color: 'var(--text-sub)' }}>
                            ここから先は、別の場所にある道具を使います。<br />
                            ゆっくり進んでください。
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <button className="btn-glass" onClick={() => setShowModal(false)} style={{ fontSize: '0.9rem' }}>
                                やめておく
                            </button>
                            <button className="btn-glass" onClick={confirmExternal} style={{ fontSize: '0.9rem', background: 'var(--primary)', color: 'white', border: 'none' }}>
                                移動する
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
