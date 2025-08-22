import PageTransitionWrapper from './PageTransitionWrapper';

export default function OutletWrapper({ children }: { children: React.ReactNode }) {
    return <PageTransitionWrapper>{children}</PageTransitionWrapper>;
}