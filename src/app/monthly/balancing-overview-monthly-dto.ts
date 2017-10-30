import {BalancingPeriodPhases} from './balancing-period-phases.enum';
import {MetricsDTO } from './metrics-dto';

export interface BalancingOverviewMonthlyDTO {

   tenant: string;

   year: number;

   month: number;

   period: BalancingPeriodPhases;

   amountOfRequiredActivations: MetricsDTO<number>; // Always required

   amountOfTimeSeriesInCriticalStatus: MetricsDTO<number>; // Always required

   amountOfTimeSeriesNotSent: MetricsDTO<number>; // Always required

   amountOfMeteringPointsNotPreparedForMuMM: MetricsDTO<number>; // Always required

   amountOfExpectedNetTimeSeries: MetricsDTO<number>; // Only 1. BKA

   amountOfImportedNetTimeSeries: MetricsDTO<number>; // Only 1. BKA

   saldoForLatestTimeSeries: MetricsDTO<number>; // Only 1. BKA

   saldoForDifferenceToBalancingRelevantVersion: MetricsDTO<number>; // Not 1.BKA

   saldoForDifferenceToLatestVersion: MetricsDTO<number>; // Not 1.BKA
}

