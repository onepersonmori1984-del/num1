import React from "react"
import { Suspense } from "react"
// @teamは5秒経過したら表示される。その場合一部ローディング(ストリーミング)して、見せられるものから見せられる処理。
// ページの一部をサスペンドにする事が出来ます。

export default function ParallelLayout({
     children,
     team,
     analytics
}: {
     children: React.ReactNode;
     team: React.ReactNode;
     analytics: React.ReactNode;
}) {
    return (
        <div>
            <h1>Parallel Layout</h1>
            {children} {/* ここに /parallel/page.tsx が入る */}
            <div style={{ display: "flex", gap: "20px" }}>
                <div style={{ border: "1px solid red" }}> {/* ここに /parallel/team/page.tsx が入る */}
                    <Suspense fallback={<div>Loading...teamは5秒経過したら表示される。ページの一部をサスペンド</div>}>
                        {team}
                    </Suspense>
                </div>
                <div style={{ border: "1px solid blue" }}> {/* ここに /parallel/analytics/page.tsx が入る */}
                        {analytics}
                </div>
            </div>
        </div>
    )
}
