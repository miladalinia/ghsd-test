import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface UseMarkDownProps {
  input: string;
  href?: string;
}

interface StyledLinkProps {
  fontWeight: string;
  fontStyle: string;
}

const StyledLink = styled.a<StyledLinkProps>`
  display: contents;
  color: ${(props) => props.theme.primary} !important;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;

const BoldText = styled.strong`
  font-weight: 900;
`;

// Helper function to handle parsing for links ([text])
const parseLinks = (text: string): (string | JSX.Element)[] => {
  const linkRegex = /\[(.*?)\]\((.*?)\)/g; // Match [text](href)
  const elements: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = linkRegex.exec(text)) !== null) {
    const [fullMatch, linkText, href] = match;
    if (match.index > lastIndex) {
      // Push text before the link
      elements.push(text.slice(lastIndex, match.index));
    }

    const isExternal =
      href.startsWith('http://') || href.startsWith('https://');

    // Push the link
    elements.push(
      <StyledLink<any>
        target="_blank"
        key={linkText + match.index}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        href={href}
        fontWeight="500"
        fontStyle="normal"
        onClick={(e) => {
          e.preventDefault();
          window.open(href, '_blank', 'noopener,noreferrer');
        }}
      >
        {linkText}
      </StyledLink>
    );
    lastIndex = match.index + fullMatch.length;
  }

  // Push remaining text after the last match
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return elements;
};

// Helper function to handle parsing for bold text ({text})
const parseBold = (
  elements: (string | JSX.Element)[]
): (string | JSX.Element)[] => {
  const boldRegex = /\{(.*?)\}/g;
  const finalParsedElements: (string | JSX.Element)[] = [];

  elements.forEach((element, index) => {
    if (typeof element === 'string') {
      let lastBoldIndex = 0;
      let boldMatch: RegExpExecArray | null;
      const boldElements: (string | JSX.Element)[] = [];

      while ((boldMatch = boldRegex.exec(element)) !== null) {
        const [boldFullMatch, boldText] = boldMatch;
        if (boldMatch.index > lastBoldIndex) {
          boldElements.push(element.slice(lastBoldIndex, boldMatch.index));
        }
        boldElements.push(
          <BoldText<any> key={boldText + index}>{boldText}</BoldText>
        );
        lastBoldIndex = boldMatch.index + boldFullMatch.length;
      }

      if (lastBoldIndex < element.length) {
        boldElements.push(element.slice(lastBoldIndex));
      }

      finalParsedElements.push(...boldElements);
    } else {
      finalParsedElements.push(element); // Preserve already parsed link elements
    }
  });

  return finalParsedElements;
};

export const MarkDown = ({
  input,
  href = '',
}: UseMarkDownProps): (string | JSX.Element)[] => {
  const [parsedContent, setParsedContent] = useState<(string | JSX.Element)[]>(
    []
  );

  useEffect(() => {
    if (input) {
      // First, parse links
      const elementsWithLinks = parseLinks(input);

      // Then, parse bold text
      const finalParsedElements = parseBold(elementsWithLinks);

      setParsedContent(finalParsedElements);
    }
  }, [input, href]);

  return parsedContent;
};
