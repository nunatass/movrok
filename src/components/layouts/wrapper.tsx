import { cn } from '@/lib/utils';
type WrapperProps = {
  children: React.ReactNode;
  className?: string;
};
export const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <main
      className={cn(
        'min-h-screen overflow-x-hidden bg-background relative',
        className
      )}
    >
      {children}
    </main>
  );
};