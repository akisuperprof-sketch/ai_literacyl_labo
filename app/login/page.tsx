"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const router = useRouter();

    useEffect(() => {
        // Check if already logged in and active
        const auth = localStorage.getItem('ai_labo_auth');
        const startDate = localStorage.getItem('ai_labo_start_date');

        if (auth && startDate) {
            const start = new Date(parseInt(startDate));
            const now = new Date();
            const diffTime = Math.abs(now.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays > 30) {
                router.push('/expired');
            } else {
                router.push('/dashboard');
            }
        }
    }, [router]);

    // Operational Parameter: Max 10 users
    // Note: For strict enforcement, server-side counting is required. 
    // This client-side check serves as the UI logic implementation.
    const isFull = false;

    const handleEnter = () => {
        if (isFull) return;

        // Set 30 day timer start if not exists
        const now = new Date().getTime();
        localStorage.setItem('ai_labo_auth', 'true');
        localStorage.setItem('ai_labo_start_date', now.toString());
        router.push('/dashboard');
    };

    return (
        <main className="container center-flex" style={{ minHeight: '100vh' }}>
            <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center', width: '100%', maxWidth: '500px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--primary)' }}>家庭AIリテラシー・ラボ</h1>
                <p style={{ marginBottom: '3rem', color: 'var(--text-sub)' }}>
                    安全に、静かに、自分と向き合う場所。
                </p>

                {isFull ? (
                    <div style={{ padding: '20px', background: 'rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                        <p style={{ color: 'var(--text-sub)', fontWeight: 500 }}>
                            定員に達したため、受付を終了しました。<br />
                            <span style={{ fontSize: '0.8em' }}>次回案内をお待ちください。</span>
                        </p>
                    </div>
                ) : (
                    <button className="btn-glass" onClick={handleEnter} style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                        ラボに入る
                    </button>
                )}
            </div>
        </main>
    );
}
