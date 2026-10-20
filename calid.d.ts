declare module "@calid/react-embed" {
  import type { ComponentType, CSSProperties } from "react";

  type CalProps = {
    namespace?: string;
    calLink: string;
    calOrigin?: string;
    embedJsUrl?: string;
    style?: CSSProperties;
    config?: Record<string, unknown>;
  };

  const Cal: ComponentType<CalProps>;
  export default Cal;

  export function getCalApi(options?: {
    namespace?: string;
    embedLibUrl?: string;
  }): Promise<(...args: unknown[]) => void>;
}
