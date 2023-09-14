import Head from 'next/head';

import common_styles from '../styles/Common.module.css'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={common_styles.container}>
      <Head>
        <title>上堂啦</title>
        <link rel="icon" href="/images/icon.png" />
      </Head>

      <main>
        <h1 className={common_styles.title}>
          上堂啦 hi
        </h1>

        <p className={common_styles.description}>
          上堂是一種生活態度，走堂罰錢是非常合理的。
        </p>

        <div className={styles.grid}>
          <a href="/rules" className={styles.card}>
            <h3>規則 &rarr;</h3>
            <p>查看遊戲規則</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>開新 Sem &rarr;</h3>
            <p>開拓收入來源，實現財自</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>繼續今個 Sem &rarr;</h3>
            <p>每日點名，看看今天又賺了多少</p>
          </a>

        </div>
      </main>

      <footer>
        <a
          href="https://github.com/AlfredChow2338?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <code>AlfredChow2338</code>
          <img src="/images/icon.png" alt="Alfred Chow" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.25rem;
          margin: 0 0.5rem;
          font-size: 0.8rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
