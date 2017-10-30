import {Severity} from './severity.enum';

export interface MetricsDTO<T> {
   value: T;
   severity:  Severity;
}
