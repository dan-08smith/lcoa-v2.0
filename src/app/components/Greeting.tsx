export default function Greeting({ name }: { name: string }) {
    const currentHour = new Date().getHours();
  
    const getGreeting = () => {
      if (currentHour < 12) {
        return "Good Morning";
      } else if (currentHour < 18) {
        return "Good Afternoon";
      } else {
        return "Good Evening";
      }
    };
  
    return (
      <span>
        {getGreeting()}, {name || "Guest"}!
      </span>
    );
  }
  