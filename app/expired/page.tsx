"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Expired() {
    const router = useRouter();
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Double check logic just to be safe, though this page is reached via logic
        setShowContent(true);
    }, []);

    const handleEnd = () => {
        // Clear data and go to login? Or just show "Thank you"?
        // "End" implies leaving. I'll clear auth and redirect to login, or just close window (cant close tab via JS usually).
        // I'll clear auth and show a "Thank you" state or redirect to login.
        localStorage.removeItem('ai_labo_auth');
        localStorage.removeItem('ai_labo_start_date');
        router.push('/login');
    };

    if (!showContent) return null;

    return (
        <div className="container center-flex" style={{ minHeight: '100vh', padding: '20px' }}>
            <div className="glass-panel" style={{ padding: '60px', maxWidth: '600px', width: '100%', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--text-main)' }}>参加期間が終了しました</h1>
                <p style={{ marginBottom: '40px', color: 'var(--text-sub)' }}>
                    30日間の体験期間が終了しました。<br />
                    これからのアクションを選択してください。
                </p>

                <div style={{ display: 'grid', gap: '20px' }}>
                    <button onClick={handleEnd} className="btn-glass" style={{ width: '100%', textAlign: 'left', padding: '20px' }}>
                        <strong style={{ fontSize: '1.2rem', display: 'block' }}>1. 終了する</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>ログアウトして終了します。</span>
                    </button>

                    <button className="btn-glass" style={{ width: '100%', textAlign: 'left', padding: '20px', cursor: 'default' }}>
                        <strong style={{ fontSize: '1.2rem', display: 'block' }}>2. 年間利用権で環境を保持する</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>（現在準備中または管理者へお問い合わせください）</span>
                    </button>

                    <button onClick={handleEnd} className="btn-glass" style={{ width: '100%', textAlign: 'left', padding: '20px' }}>
                        <strong style={{ fontSize: '1.2rem', display: 'block' }}>3. 次回参加案内を待つ</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-sub)' }}>一旦終了し、またの機会をお待ちください。</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
