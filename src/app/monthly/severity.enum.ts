/**
* This class gives an information on the severity of a given metric.
*/
export const enum Severity {
  /** Value is critical. */
  RED,
  /** Value needs observation. */
  YELLOW,
  /** Value is unproblematic. */
  GREEN,
  /** The value is not present. */
  NOT_PRESENT
}
