// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import relativeImports from "eslint-plugin-no-relative-import-paths";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,

    {
        plugins: {
            "relative-imports": relativeImports
        },
        rules: {
            "prefer-const": "warn",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-unused-vars": "warn",
            "no-useless-escape": "off",
            "@typescript-eslint/no-require-imports": "off",
            "no-prototype-builtins": "off",
            "@typescript-eslint/no-empty-object-type": "off",
            "no-case-declarations": "off",
            "no-var": "warn",
            "no-empty": "off",
            "@typescript-eslint/no-namespace": "off",
            "no-undef": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "no-cond-assign": "off",
            "@typescript-eslint/no-this-alias": "off",
            "relative-imports/no-relative-import-paths": [
                "warn",
                {
                    allowSameFolder: true,
                    allowedDepth: 1
                }
            ]
        }
    }
);
