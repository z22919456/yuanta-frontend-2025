import ExportImage from 'next-image-export-optimizer';

type ExportImageProps = React.ComponentProps<typeof ExportImage>;

// 讓所有 Image 自動戴上 basePath
const Image = (props: ExportImageProps) => (
  <ExportImage {...props} basePath={process.env.NEXT_PUBLIC_BASE_PATH || ''} />
);

export default Image;
