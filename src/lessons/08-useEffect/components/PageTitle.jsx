import { useEffect } from "react";

function PageTitle () {
  useEffect(() => {
    document.title = 'React useEffect Lesson'

    console.log('Component Mounted');
  }, []);

  return (
    <div>
      <h2>Check Browser Tab Title</h2>
    </div>
  );
}

export default PageTitle;