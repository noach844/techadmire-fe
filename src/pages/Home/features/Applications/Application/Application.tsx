import { Avatar, Button, Card, Flex, Image, Paper, Text } from '@mantine/core';

export interface IApplication {
  university: string;
  course: string;
  fullname: string;
}

export const Application = ({ university, course, fullname }: IApplication) => {
  return (
    <Card
      radius='md'
      withBorder
      p='md'
      bg='var(--mantine-color-body)'
      w='20rem'
      mb='lg'
    >
      <Card.Section>
        <Image
          src={
            'https://images.collegedunia.com/public/college_data/images/studyabroad/appImage/college_1090_29-15:00_o-HARVARD-UNIVERSITY-BUILDING-facebook.jpeg'
          }
        />
      </Card.Section>
      <Flex direction={'column'} align={'center'} justify={'center'}>
        <Text ta='center' fz='lg' fw={500} mt='md'>
          {course} - {university}
        </Text>
        <Text ta='center' c='dimmed' fz='sm'>
          {fullname}
        </Text>
      </Flex>
    </Card>
  );
};
