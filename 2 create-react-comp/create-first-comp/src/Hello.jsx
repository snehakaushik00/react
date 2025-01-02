function Hello() {

 var myName = 'Sneha';
 let number = 456;
 let fullName = () => {
  return 'Sneha kaushik';
 }
  return <p>
    MessageNo: {number} I am your master {fullName()}
  </p>
}

export default Hello;