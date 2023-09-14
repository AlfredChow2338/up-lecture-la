import Head from 'next/head';
import Link from 'next/link';

import common_styles from '../../styles/Common.module.css'
import styles from '../../styles/Rules.module.css'

const rules = [
  {
    topic: '罰錢：',
    content: [
      '基本收費，每走一個鐘堂罰$20；',
      '每星期走堂比例到50%，開始雙炒$40，例如一個星期有11個鐘堂，走第6個鐘開始雙炒；',
      'Course多過一個人上先計，因為一個人上冇機會收錢，同時罰錢都冇人收；',
      '走堂後需要立即PayMe去中立戶口；'
    ],
  },
  {
    topic: '分錢',
    content: [
      '有份上個個course，而同時個個course有人走堂，就可以收錢，例如3006有4個人上，其中一個走咗，其他三個就可以平分罰款；',
      '分錢每兩個星期一次，初頭會用Excel表紀錄，等分錢系統開發完成會用自動計，按紀錄分錢；'
    ]
  },
  {
    topic: '遲到：',
    content: [
      '1個鐘嘅堂，遲15分鐘當遲；2個鐘以上嘅堂，遲30分鐘當遲；'
    ]
  },
  {
    topic: '請假 / 早走：',
    content: [
      '為防有人濫用機制走堂，請假或早退需要有合理原因，並獲得過半數委員接受，先可以通過；'
    ]
  }
]

export default function RulesPage() {
  return (
    <>
    <div className={styles.arrow}><Link className={styles.back} href='/'>&larr;</Link></div>
    <div className={common_styles.container}>
    <Head>
      <title>白皮書</title>
      <link rel="icon" href="/images/icon.png" />
    </Head>
    <main>
      <h1 className={common_styles.title}>
        白皮書
      </h1>
      <div className={common_styles.center_wrapper}>
        <code>兩大原則：公平，風險愈大，回報愈大；唔可以隨便走堂。</code>
      </div>
      {rules.map(rule => (
        <>
          <h3>{rule.topic}</h3>
          <ol>
          {rule.content.map(item => (
            <li>
            <p>
              {item}
            </p>
          </li>
          ))}
          </ol>
        </>
      ))}
      </main>
      <style jsx>{`
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
    </>
  )
}