// by convention, composable function names start with "use"
export default function () {
  const { client } = usePrismic();

  const contacts = useState('medarbetare', () => []);
  async function fetchAll() {
    if (!contacts.value.length)
      contacts.value = await client.getAllByType('medarbetare', {
        orderings: {
          field: 'uid',
          direction: 'desc',
        },
      });
  }

  return {
    fetchAll,
    contacts,
  };
}
