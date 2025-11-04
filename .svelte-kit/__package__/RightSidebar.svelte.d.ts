import type { ComponentItem, Screen } from '../types';
interface Props {
    selectedScreen: Screen | null;
    selectedComponent: ComponentItem | null;
    onScrollToComponent: (componentId: string) => void;
}
declare const RightSidebar: import("svelte").Component<Props, {}, "">;
type RightSidebar = ReturnType<typeof RightSidebar>;
export default RightSidebar;
