import ExportImage from 'next-image-export-optimizer';

type ExportImageProps = React.ComponentProps<typeof ExportImage>;

const Image = (props: ExportImageProps) => (
  <ExportImage {...props} basePath={process.env.NEXT_PUBLIC_BASE_PATH || ''} />
);

export default Image;
