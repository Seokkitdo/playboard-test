import type { Module, Screen } from '../types';
interface Props {
    onScreenSelect: (module: Module, screen: Screen) => void;
}
declare const LeftSidebar: import("svelte").Component<Props, {}, "">;
type LeftSidebar = ReturnType<typeof LeftSidebar>;
export default LeftSidebar;
