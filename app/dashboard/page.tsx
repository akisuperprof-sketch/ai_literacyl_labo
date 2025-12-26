"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Dashboard() {
    const router = useRouter();
    const [daysLeft, setDaysLeft] = useState<number | null>(null);
    const [endDateStr, setEndDateStr] = useState<string>("");

    useEffect(() => {
        const auth = localStorage.getItem('ai_labo_auth');
        const startDate = localStorage.getItem('ai_labo_start_date');

        if (!auth || !startDate) {
            router.push('/login');
            return;
        }

        const start = new Date(parseInt(startDate));
        const end = new Date(start.getTime() + 30 * 24 * 60 * 60 * 1000);
        const now = new Date();

        // Calculate remaining days
        const diffTime = end.getTime() - now.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays <= 0) {
            router.push('/expired');
        } else {
            setDaysLeft(diffDays);
            setEndDateStr(end.toLocaleDateString('ja-JP'));
        }
    }, [router]);

    // Modal state
    const [showModal, setShowModal] = useState(false);
    const [targetUrl, setTargetUrl] = useState("");

    const handleExternalLink = (e: React.MouseEvent, url: string) => {
        e.preventDefault();
        setTargetUrl(url);
        setShowModal(true);
    };

    const confirmExternal = () => {
        window.open(targetUrl, '_blank');
        setShowModal(false);
    };

    if (daysLeft === null) return null; // Loading

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {/* Header */}
            <header style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontWeight: 700, color: 'var(--primary)' }}>家庭AIリテラシー・ラボ</div>
                <nav style={{ display: 'flex', gap: '20px' }}>
                    <Link href="/library" className="btn-glass" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>ライブラリを覗く</Link>
                    <Link href="/parents" className="btn-glass" style={{ fontSize: '0.9rem', padding: '8px 16px' }}>保護者の方へ</Link>
                </nav>
            </header>

            {/* Main Content */}
            <main className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>

                <div style={{ textAlign: 'center', marginBottom: '60px', width: '100%', maxWidth: '800px' }}>
                    {/* Target 1: Current Status Display */}
                    <div style={{
                        marginBottom: '20px',
                        padding: '8px 16px',
                        background: 'rgba(255,255,255,0.4)',
                        borderRadius: '20px',
                        display: 'inline-block',
                        fontSize: '0.9rem',
                        color: 'var(--text-sub)'
                    }}>
                        現在の状態：自由なペースで滞在中（このままで大丈夫です）
                    </div>

                    <h1 style={{ fontSize: '3rem', marginBottom: '10px', background: 'linear-gradient(to right, #6c5ce7, #a29bfe)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        家庭AIリテラシー・ラボ
                    </h1>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-sub)', marginBottom: '20px' }}>
                        考える・整理する・表現する
                    </h2>

                    <div className="glass-panel" style={{ display: 'inline-block', padding: '10px 20px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        ⚠️ 本ラボは成果や収益を保証するものではありません
                    </div>

                    <div style={{ margin: '30px auto', maxWidth: '800px', width: '100%' }}>
                        <img src="/characters_banner.png" alt="Process flow: Frog, Giraffe, Red Panda, Elephant" style={{ width: '100%', height: 'auto', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }} />
                    </div>

                    <div style={{ marginTop: '20px', fontSize: '1rem', color: 'var(--text-main)', fontWeight: 500 }}>
                        参加期間終了まで: <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>{daysLeft}日</span> ({endDateStr}まで)
                    </div>
                </div>

                {/* Character Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px',
                    width: '100%',
                    maxWidth: '1000px'
                }}>

                    {/* 1. Furikaeru */}
                    <div
                        onClick={(e) => handleExternalLink(e, "https://my-self-analysis-app-temp-n4l989682.vercel.app/")}
                        className="glass-panel"
                        style={{
                            padding: '40px',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ fontSize: '5rem', marginBottom: '20px', filter: 'drop-shadow(0 10px 20px rgba(85, 239, 196, 0.4))' }}>🐸</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>ふりカエル</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>自分を振りカエル<br />今の自分を、少しだけ<br />言葉にしてみよう</p>
                        {/* Target 3: Softer text */}
                        <div style={{ marginTop: 'auto', paddingTop: '20px', fontSize: '0.8rem', color: 'var(--primary)', opacity: 0.8 }}>道具をのぞいてみる ↗</div>
                    </div>

                    {/* 2. Bunsekirin */}
                    <div
                        onClick={(e) => handleExternalLink(e, "https://business-research-24.vercel.app/")}
                        className="glass-panel"
                        style={{
                            padding: '40px',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ fontSize: '5rem', marginBottom: '20px', filter: 'drop-shadow(0 10px 20px rgba(255, 234, 167, 0.4))' }}>🦒</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>ぶんせキリン</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>どれが合いそうか<br />静かに整理してみよう</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px', fontSize: '0.8rem', color: 'var(--primary)', opacity: 0.8 }}>整理してみる ↗</div>
                    </div>

                    {/* 3. Tsukuressa */}
                    <div
                        onClick={(e) => handleExternalLink(e, "https://note-ai-agent-one.vercel.app/")}
                        className="glass-panel"
                        style={{
                            padding: '40px',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ fontSize: '5rem', marginBottom: '20px', filter: 'drop-shadow(0 10px 20px rgba(250, 177, 160, 0.4))' }}>🐼</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>つくレッサー</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>あとから直せる<br />たたき台を作ろう</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px', fontSize: '0.8rem', color: 'var(--primary)', opacity: 0.8 }}>文章を書いてみる ↗</div>
                    </div>

                    {/* 4. Hirogezou (Internal) */}
                    <Link href="/hirogezou"
                        className="glass-panel"
                        style={{
                            padding: '40px',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textDecoration: 'none'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        <div style={{ fontSize: '5rem', marginBottom: '20px', filter: 'drop-shadow(0 10px 20px rgba(116, 185, 255, 0.4))' }}>🐘</div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--text-main)' }}>ひろげゾウ</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>どう伝えるかを<br />考えてみよう</p>
                        <div style={{ marginTop: 'auto', paddingTop: '20px', fontSize: '0.8rem', color: 'var(--primary)', opacity: 0.8 }}>考え方を見る</div>
                    </Link>

                </div>
            </main>

            {/* Target 4: Interstitial Modal */}
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
