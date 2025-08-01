import styled from "styled-components";

/**
 * Spacer
 * Adds vertical space between components.
 *
 * Props (all optional):
 * - size: desktop/tablet space (string, e.g. "6rem" or "48px"). Default: "4rem"
 * - mobileSize: mobile space (string). Default: "2.5rem"
 *
 * You can also override with CSS vars:
 * style={{ "--space": "8rem", "--space-mobile": "5rem" }}
 */
const Spacer = styled.div`
  height: var(--space, ${(p) => p.size || "4rem"});

  @media (max-width: 900px) {
    height: var(--space-mobile, ${(p) => p.mobileSize || "2.5rem"});
  }
`;

export default Spacer;
