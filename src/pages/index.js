import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const productSpaces = [
  {
    name: 'Openclaw',
    description: 'Tài liệu cốt lõi cho triển khai, cấu hình và vận hành nền tảng.',
    link: '/openclaw/intro',
  },
  {
    name: 'NemoClaw',
    description: 'Hướng dẫn tính năng, tích hợp hệ thống và luồng nghiệp vụ.',
    link: '/nemoclaw/intro',
  },
  {
    name: 'HiTechClaw',
    description: 'Kiến trúc nâng cao, mô hình triển khai và chuẩn enterprise.',
    link: '/hitechclaw/intro',
  },
  {
    name: 'ClawSpark',
    description: 'Workflow, API, automation và hướng dẫn mở rộng quy trình.',
    link: '/clawspark/intro',
  },
  {
    name: 'Docs Khác',
    description: 'Kho tài liệu dùng chung, tiêu chuẩn nội bộ và tài liệu tham chiếu.',
    link: '/other-docs/intro',
  },
];

const enterpriseHighlights = [
  'Quản trị đa không gian tài liệu trong cùng một cổng tập trung.',
  'Thiết kế ưu tiên đội vận hành, kỹ thuật, triển khai và hỗ trợ nội bộ.',
  'Sẵn sàng mở rộng cho SOP, runbook, release note và hướng dẫn tích hợp.',
];

const businessBenefits = [
  {
    title: 'Chuẩn hóa tri thức nội bộ',
    description:
      'Thiết lập một nguồn sự thật duy nhất cho tài liệu vận hành, triển khai và đào tạo nội bộ.',
  },
  {
    title: 'Tăng tốc onboarding',
    description:
      'Giảm thời gian tiếp cận hệ thống nhờ cấu trúc tài liệu thống nhất và dễ tìm kiếm.',
  },
  {
    title: 'Hỗ trợ mở rộng sản phẩm',
    description:
      'Dễ dàng thêm tài liệu cho các dòng sản phẩm mới mà vẫn giữ trải nghiệm đồng nhất.',
  },
];

const processSteps = [
  'Xây dựng taxonomy tài liệu theo từng miền sản phẩm.',
  'Chuẩn hóa quy trình viết, review và phát hành tài liệu.',
  'Mở rộng tài liệu vận hành, release note và integration guide theo từng đội.',
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const bannerUrl = useBaseUrl('/img/hitechclaw-banner-dark.png');

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Cổng tài liệu doanh nghiệp</div>
          <div className={styles.brandBanner}>
            <img src={bannerUrl} alt="HiTechClaw AI banner" />
          </div>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <p className={styles.heroDescription}>
            Nền tảng tài liệu tập trung cho toàn bộ hệ sinh thái Claw, được tổ
            chức rõ ràng theo từng sản phẩm để hỗ trợ triển khai, vận hành và
            mở rộng ở quy mô enterprise.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/openclaw/intro">
              Vào tài liệu Openclaw
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/nemoclaw/intro">
              Xem NemoClaw
            </Link>
          </div>
          <div className={styles.metrics}>
            <div className={styles.metricCard}>
              <strong>05</strong>
              <span>không gian tài liệu</span>
            </div>
            <div className={styles.metricCard}>
              <strong>01</strong>
              <span>cổng quản trị nội dung</span>
            </div>
            <div className={styles.metricCard}>
              <strong>24/7</strong>
              <span>sẵn sàng cho vận hành</span>
            </div>
          </div>
        </div>
        <div className={styles.heroPanel}>
          <div className={styles.panelBanner}>
            <img src={bannerUrl} alt="HiTechClaw AI banner preview" />
          </div>
          <div className={styles.panelHeader}>Danh mục tài liệu</div>
          <ul className={styles.panelList}>
            <li>
              <span>Openclaw</span>
              <small>Tài liệu nền tảng cốt lõi</small>
            </li>
            <li>
              <span>NemoClaw</span>
              <small>Hướng dẫn tính năng và tích hợp</small>
            </li>
            <li>
              <span>HiTechClaw</span>
              <small>Kiến trúc và triển khai nâng cao</small>
            </li>
            <li>
              <span>ClawSpark</span>
              <small>Quy trình, API và workflow</small>
            </li>
            <li>
              <span>Docs Khác</span>
              <small>Tài liệu dùng chung và tham chiếu nội bộ</small>
            </li>
          </ul>
          <div className={styles.panelFooter}>
            <span>Chuẩn hoá tài liệu</span>
            <strong>Enterprise-ready</strong>
          </div>
        </div>
      </div>
    </header>
  );
}

function EnterpriseSections() {
  return (
    <>
      <section className={styles.enterpriseSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Năng lực cổng tài liệu</span>
            <Heading as="h2">Thiết kế cho vận hành tài liệu ở quy mô doanh nghiệp</Heading>
            <p>
              Cấu trúc landing page và hệ thống docs được tối ưu để các nhóm sản
              phẩm, triển khai và vận hành phối hợp hiệu quả trên cùng một nền tảng.
            </p>
          </div>

          <div className={styles.highlightGrid}>
            {enterpriseHighlights.map((item, index) => (
              <div key={index} className={styles.highlightCard}>
                <span>0{index + 1}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.productSection}>
        <div className="container">
          <div className={styles.sectionHeading}>
            <span className={styles.sectionEyebrow}>Không gian sản phẩm</span>
            <Heading as="h2">Truy cập nhanh từng miền tài liệu</Heading>
            <p>
              Mỗi khu vực được cô lập rõ ràng để dễ quản trị cấu trúc nội dung,
              điều hướng và lộ trình phát triển tài liệu cho từng dòng sản phẩm.
            </p>
          </div>

          <div className={styles.productGrid}>
            {productSpaces.map((product) => (
              <Link key={product.name} className={styles.productCard} to={product.link}>
                <div>
                  <strong>{product.name}</strong>
                  <p>{product.description}</p>
                </div>
                <span>Xem tài liệu</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.strategySection}>
        <div className="container">
          <div className={styles.strategyLayout}>
            <div>
              <div className={styles.sectionHeading}>
                <span className={styles.sectionEyebrow}>Lợi ích doanh nghiệp</span>
                <Heading as="h2">Tối ưu cho quản trị tri thức và vận hành lâu dài</Heading>
                <p>
                  Landing page mới không chỉ đẹp hơn mà còn đóng vai trò như một
                  cổng điều phối tri thức giữa nhiều nhóm sản phẩm và nhóm vận hành.
                </p>
              </div>

              <div className={styles.benefitStack}>
                {businessBenefits.map((item) => (
                  <div key={item.title} className={styles.benefitCard}>
                    <strong>{item.title}</strong>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.processCard}>
              <span className={styles.processLabel}>Quy trình khuyến nghị</span>
              <Heading as="h3">Lộ trình triển khai ClawDocs</Heading>
              <ol className={styles.processList}>
                {processSteps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className={styles.processActions}>
                <Link className="button button--primary button--lg" to="/hitechclaw/intro">
                  Xem HiTechClaw
                </Link>
                <Link className="button button--outline button--primary button--lg" to="/other-docs/intro">
                  Mở Docs Khác
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Cổng tài liệu tập trung cho toàn bộ hệ sinh thái Claw.">
      <HomepageHeader />
      <main>
        <EnterpriseSections />
      </main>
    </Layout>
  );
}
