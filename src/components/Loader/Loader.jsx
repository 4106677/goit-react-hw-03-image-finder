import ContentLoader from 'react-content-loader';

const Loader = props => (
  <ContentLoader
    width={1200}
    height={900}
    viewBox="0 0 1200 900"
    backgroundColor="#eaeced"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="68" y="37" rx="3" ry="3" width="298" height="129" />
    <rect x="426" y="37" rx="3" ry="3" width="298" height="129" />
    <rect x="786" y="37" rx="3" ry="3" width="298" height="129" />

    <rect x="68" y="237" rx="3" ry="3" width="298" height="129" />
    <rect x="426" y="237" rx="3" ry="3" width="298" height="129" />
    <rect x="786" y="237" rx="3" ry="3" width="298" height="129" />

    <rect x="68" y="437" rx="3" ry="3" width="298" height="129" />
    <rect x="426" y="437" rx="3" ry="3" width="298" height="129" />
    <rect x="786" y="437" rx="3" ry="3" width="298" height="129" />
  </ContentLoader>
);

export default Loader;
