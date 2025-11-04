import type { Module, Screen, ComponentItem } from '../types';
interface Props {
    selectedModule: Module | null;
    selectedScreen: Screen | null;
    scrollToComponent: string | null;
    onComponentSelect: (component: ComponentItem) => void;
}
declare const MainContent: import("svelte").Component<Props, {}, "">;
type MainContent = ReturnType<typeof MainContent>;
export default MainContent;
