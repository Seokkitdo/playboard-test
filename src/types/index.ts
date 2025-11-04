export type ModuleType =
  | 'CENTER_MANAGEMENT'
  | 'ASSESSMENT_MANAGEMENT'
  | 'APPOINTMENT_MANAGEMENT'
  | 'USER_AUTH'
  | 'AUTHORIZATION'
  | 'SETTINGS'
  | 'SUBSCRIPTION_MANAGEMENT'
  | 'LOG_MANAGEMENT';

export interface Module {
  id: ModuleType;
  name: string;
  screens: Screen[];
}

export interface Screen {
  id: string;
  name: string;
  components: ComponentItem[];
}

export interface ComponentItem {
  id: string;
  name: string;
  type: 'card' | 'button' | 'form' | 'table' | 'modal';
  description?: string;
}
