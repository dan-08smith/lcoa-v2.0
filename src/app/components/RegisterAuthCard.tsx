export default function RegisterCard({
    title,
    step,
    children,
  }: {
    title: string;
    step: number;
    children: React.ReactNode;
  }) {
    const steps = [
      { name: "Step 1", description: "Let's get to know you" },
      { name: "Step 2", description: "Your contact details" },
      { name: "Step 3", description: "Let's secure your account" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded">
          <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>
  
          <div className="flex justify-center mb-4">
            <nav className="flex space-x-4">
              {steps.map((s, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`relative flex items-center justify-center w-8 h-8 text-sm rounded-full font-medium 
                    ${index + 1 <= step ? "bg-blue-600 text-white" : "bg-gray-300 text-gray-600"}`}
                  >
                    {index + 1}
                  </div>
  
                  {index < steps.length - 1 && (
                    <div
                      className={`w-10 h-1 ${index + 1 < step ? "bg-blue-600" : "bg-gray-300"}`}
                    ></div>
                  )}
                </div>
              ))}
            </nav>
          </div>
  
          <p className="text-center text-gray-600 mb-4">{steps[step - 1].description}</p>
  
          {children}
        </div>
      </div>
    );
  }
  