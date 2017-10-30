export const enum BalancingPeriodPhases {
  /** If the balancing period has not yet started. */
  NOT_STARTED,
  /** Erstaufschlagsrecht 1.BKA. */
  FIRST_BGS,
  /** Prüfphase 1.BKA. */
  VERIFICATION_FIRST_BGS,
  /** Erstausschlagsrecht 2.BKA. */
  SECOND_BGS,
  /** Prüfphase 2.BKA. */
  VERIFICATION_SECOND_BGS,
  /** The month is finished. */
  FINISHED
}

