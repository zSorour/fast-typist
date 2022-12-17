type Props = {
  children: React.ReactNode;
  row?: boolean;
};

const PageWrapper = ({ row = false, children }: Props) => {
  return (
    <div
      className={`justify-self-stretch flex-1 flex ${
        row ? 'flex-row' : 'flex-col'
      } py-4 gap-6 justify-center`}
    >
      {children}
    </div>
  );
};
export default PageWrapper;
