"use client";

import Link from 'next/link';

export default function Parents() {
    return (
        <div style={{ minHeight: '100vh', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <header className="container" style={{ width: '100%', marginBottom: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                    <h1 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>保護者の皆様へ</h1>
                </Link>
            </header>

            <main className="container glass-panel" style={{ background: 'var(--card-bg)', backdropFilter: 'blur(10px)', border: '1px solid var(--card-border)', borderRadius: '20px', padding: '60px', maxWidth: '800px', width: '100%', boxShadow: 'var(--card-shadow)' }}>

                <div style={{ fontSize: '1.2rem', lineHeight: '2.2', textAlign: 'center', color: 'var(--text-main)' }}>
                    <p style={{ marginBottom: '40px' }}>
                        このラボは、AIを使って<br />
                        <strong>考える・整理する・表現する</strong><br />
                        という体験を行うための学習環境です。
                    </p>

                    <p style={{ marginBottom: '40px' }}>
                        成果や収益を目的とするものではありません。<br />
                        学業や生活を最優先してください。
                    </p>

                    <p>
                        やらなくても問題ありません。<br />
                        途中でやめても問題ありません。<br />
                        保護者の方による管理や監督も不要です。
                    </p>
                </div>

            </main>
        </div>
    );
}
