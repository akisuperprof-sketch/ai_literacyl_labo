"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Hirogezou() {
    const router = useRouter();

    useEffect(() => {
        const auth = localStorage.getItem('ai_labo_auth');
        if (!auth) router.push('/login');
    }, [router]);

    return (
        <div style={{ minHeight: '100vh', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <header className="container" style={{ width: '100%', marginBottom: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="/dashboard" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
                    <span style={{ fontSize: '2.5rem' }}>🐘</span>
                    <h1 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>ひろげゾウ</h1>
                </Link>
            </header>

            <main className="container glass-panel" style={{ padding: '60px', maxWidth: '800px', width: '100%' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '30px', borderBottom: '2px solid var(--elephant-color)', paddingBottom: '10px' }}>
                    どう伝えるかを考えてみよう
                </h2>

                <section style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary)' }}>文章の整え方</h3>
                    <p style={{ marginBottom: '20px' }}>
                        作った文章を誰かに読んでもらうときは、以下の点に気をつけてみましょう。
                    </p>
                    <ul style={{ paddingLeft: '20px', lineHeight: '2' }}>
                        <li>一文を短くする（60文字以内を目安に）</li>
                        <li>「。」と「、」のリズムを意識する</li>
                        <li>難しい言葉は、簡単な言葉に言い換える</li>
                        <li>一番伝えたいことは、最初に書く</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--primary)' }}>伝え方の考え方</h3>
                    <p style={{ marginBottom: '20px' }}>
                        相手にどう感じてほしいですか？
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.5)', borderRadius: '10px' }}>
                            <strong>共感してほしい時</strong>
                            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>自分の気持ちや、体験したときの情景を詳しく描写しましょう。</p>
                        </div>
                        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.5)', borderRadius: '10px' }}>
                            <strong>理解してほしい時</strong>
                            <p style={{ fontSize: '0.9rem', marginTop: '10px' }}>理由と事例をセットにして、論理的に構成しましょう。</p>
                        </div>
                    </div>
                </section>

                <div style={{ padding: '20px', background: 'rgba(255,0,0,0.05)', borderRadius: '10px', borderLeft: '4px solid #ff7675' }}>
                    <strong>⚠️ 注意</strong>
                    <p style={{ fontSize: '0.9rem', marginTop: '5px' }}>
                        本ラボでは、SNSへの自動投稿や拡散機能は提供していません。<br />
                        ここで考えたことは、まずは身近な家族や、自分自身のために大切にしまっておくのも一つの選択です。
                    </p>
                </div>
            </main>
        </div>
    );
}
