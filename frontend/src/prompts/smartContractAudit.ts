export const codeExplanationPrompt = {
  model: "gpt-4o",
  temperature: 0,
  // max_tokens: 5048,
  systemPrompt: "You are a helpful assistant specialized in explaining code and auditing smart contracts.",
  userPrompt: (codeSnippet: string) => `You are a helpful assistant specialized in explaining code and auditing smart contracts. ${codeSnippet}`,
  responseFormat: {
    "type": "json_schema",
    "json_schema": {
      "name": "codeExplanationResponse",
      "strict": true,
      "schema": {
        "type": "object",
        "properties": {
          "explanation": {
            "type": "string",
            "description": "The concise explanation of the provided code."
          },
          "auditResult": {
            "type": "object",
            "properties": {
              "contractType": {
                "type": "string",
                "description": "The type of contract being audited (e.g., Cairo, Starknet)."
              },
              "issuesFound": {
                "type": "array",
                "description": "A list of issues or bugs found during the audit.",
                "items": {
                  "type": "string",
                  "description": "Description of the issue or bug found."
                }
              },
              "suggestedFixes": {
                "type": "array",
                "description": "A list of suggestions or fixes for improving the contract's code.",
                "items": {
                  "type": "string",
                  "description": "A specific suggestion for fixing the issue."
                }
              },
              "securityChecksPassed": {
                "type": "boolean",
                "description": "Whether the contract passed the security checks."
              }
            },
            "required": [
              "contractType",
              "issuesFound",
              "suggestedFixes",
              "securityChecksPassed"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "explanation",
          "auditResult"
        ],
        "additionalProperties": false,
        "$schema": "http://json-schema.org/draft-07/schema#"
      }
    }
  },
  tools: [
    {
      "type": "function",
      "function": {
        "name": "cairo_smart_contract_verifier",
        "description": "Generate a Cairo programming language smart contract verifier that can audit and fix bugs in Cairo smart contracts.",
        "parameters": {
          "type": "object",
          "required": [
            "source_code",
            "verification_rules",
            "debug_mode"
          ],
          "properties": {
            "source_code": {
              "type": "string",
              "description": "The source code of the Cairo smart contract to be audited."
            },
            "verification_rules": {
              "type": "array",
              "description": "List of rules that the verifier will use to audit the smart contract.",
              "items": {
                "type": "string",
                "description": "Specific rule for verification."
              }
            },
            "debug_mode": {
              "type": "boolean",
              "description": "Enable debug mode to provide detailed error messages."
            }
          },
          "additionalProperties": false
        },
        "strict": true
      }
    },
    {
      "type": "function",
      "function": {
        "name": "starknet_contract_verifier_auditor",
        "description": "Generate a Starknet smart contract verifier and auditor that can edit, write, suggest fixes, improve security, and enhance the code of a Starknet smart contract.",
        "parameters": {
          "type": "object",
          "required": [
            "contract_code",
            "actions",
            "suggestions",
            "security_checks"
          ],
          "properties": {
            "contract_code": {
              "type": "string",
              "description": "The code of the Starknet smart contract to be verified or audited."
            },
            "actions": {
              "type": "array",
              "description": "List of actions to perform on the smart contract.",
              "items": {
                "type": "string",
                "description": "Specific action to be performed, such as 'edit', 'write', 'suggest-fix', 'improve-security'.",
                "enum": [
                  "edit",
                  "write",
                  "suggest-fix",
                  "improve-security"
                ]
              }
            },
            "suggestions": {
              "type": "array",
              "description": "Suggestions for improvements or bug fixes for the smart contract.",
              "items": {
                "type": "string",
                "description": "A specific suggestion for improving or fixing the contract."
              }
            },
            "security_checks": {
              "type": "boolean",
              "description": "Flag to indicate whether to perform security checks on the contract."
            }
          },
          "additionalProperties": false
        },
        "strict": true
      }
    }
  ]
};

