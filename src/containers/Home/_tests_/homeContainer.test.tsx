import React from 'react';
import { validateButton } from '../HomeContainer';

describe("validateButton tests", () => {
    it("should return true", () => {
      expect(validateButton("all", "okay")).toBe(true);
      expect(validateButton("a", "aaab")).toBe(true);
      expect(validateButton("", "")).toBe(false);
    });
})