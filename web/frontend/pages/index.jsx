import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Text,
} from "@shopify/polaris";

import CustomSidebar from "../components/CustomSidebar";

export default function HomePage() {
  return (
    <Page fullWidth>
      <Stack wrap={false}>
        <Stack.Item>
          <CustomSidebar />
        </Stack.Item>
      </Stack>
    </Page>
  );
}
