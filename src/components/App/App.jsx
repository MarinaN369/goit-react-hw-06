
import "./App.css";
import ContactList from "../ContactList/ContactList";
// import userData from "../../user.json";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";




const App =() => {
  return (
    <>
      <h1>Phonebook</h1>
      <br />
      <ContactForm />
      <SearchBox />
      <ContactList  />
    </>
  );
}

export default App;

  // const dispatch = useDispatch();

  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectNameFilter);

  // const filteredUsers = contacts.filter(
  //   (contact) =>
  //     contact.name &&
  //     contact.name.toLowerCase().includes((filter || "").toLowerCase())
  // );

  // useEffect(() => {
  //   localStorage.setItem("users", JSON.stringify(contacts));
  // }, [contacts]);

  // const onAddUser = (formData) => {
  //   const finalUser = {
  //     ...formData,
  //     id: nanoid(),

  //   };
  //   dispatch(addContact(finalUser));
  // };

 

  // const onUserDelete = (userId) => {
  //   dispatch(deleteContact(userId));
  // };
 

  // const onChangeFilter = (event) => {
  //   dispatch(changeFilter(event.target.value));
  // };

  