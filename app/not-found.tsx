import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="container center-flex" style={{ minHeight: '100vh', flexDirection: 'column', textAlign: 'center' }}>
            <div className="glass-panel" style={{ padding: '60px', maxWidth: '600px', width: '100%' }}>
                <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>🍃</h1>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'var(--text-main)' }}>ここには何もありません</h2>
                <p style={{ marginBottom: '40px', color: 'var(--text-sub)' }}>
                    でも、それで大丈夫です。<br />
                    何もしない時間も、大切な時間です。
                </p>
                <Link href="/dashboard" className="btn-glass" style={{ display: 'inline-block' }}>
                    トップへ戻る
                </Link>
            </div>
        </div>
    );
}
