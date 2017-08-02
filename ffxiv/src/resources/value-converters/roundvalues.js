// A ValueConverter for rounding decimals to whole numbers in Aurelia
export class RoundValuesValueConverter {
  toView(value) {
    return Math.round(value);
  }
}

/**
 * Usage
 * Shows how to use the custom ValueConverter to round values
 * to whole numbers.
 *
 * <require from="roundvalues"></require>
 * ${value | roundValues}
 */
