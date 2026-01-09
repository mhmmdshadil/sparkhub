const fs = require('fs');
const content = `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_ZGVhci1yZWRmaXNoLTI0LmNsZXJrLmFjY291bnRzLmRldiQ
CLERK_SECRET_KEY=sk_test_QaOlO2UJDqGXl3F19JmP7RGjOcOLpcP3TZwK9guTJa
`;
fs.writeFileSync('.env.local', content, { encoding: 'utf8' });
console.log('Successfully wrote .env.local with UTF-8 encoding');
