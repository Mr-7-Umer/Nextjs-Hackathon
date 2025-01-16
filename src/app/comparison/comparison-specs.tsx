export default function ComparisonSpecs() {
    const specifications = {
      general: {
        title: "General",
        specs: [
          { label: "Sales Package", product1: "1 sectional sofa", product2: "1 Three Seater, 2 Single Seater" },
          { label: "Model Number", product1: "TFCBKBSBS0016", product2: "DTGB/DRBS/BS" },
          { label: "Secondary Material", product1: "Solid Wood", product2: "Solid Wood" },
          { label: "Configuration", product1: "L-shaped", product2: "L-shaped" },
          { label: "Upholstery Material", product1: "Fabric + Cotton", product2: "Fabric + Cotton" },
          { label: "Upholstery Color", product1: "Bright Grey & Lion", product2: "Bright Grey & Lion" },
        ],
      },
      dimensions: {
        title: "Dimensions",
        specs: [
          { label: "Length", product1: "200 cm", product2: "210 cm" },
          { label: "Width", product1: "80 cm", product2: "85 cm" },
          { label: "Height", product1: "90 cm", product2: "95 cm" },
          { label: "Seating Height", product1: "40 cm", product2: "42 cm" },
          { label: "Weight", product1: "30 kg", product2: "32 kg" },
        ],
      },
      product: {
        title: "Product",
        specs: [
          { label: "Brand", product1: "Trevi Furniture", product2: "XYZ Interiors" },
          { label: "Material", product1: "Teak Wood", product2: "Oak Wood" },
          { label: "Color", product1: "Brown", product2: "Beige" },
          { label: "Assembly Required", product1: "Yes", product2: "No" },
          { label: "Finish Type", product1: "Glossy", product2: "Matte" },
        ],
      },
      warranty: {
        title: "Warranty",
        specs: [
          {
            label: "Warranty Summary",
            product1: "1 Year Manufacturing Warranty",
            product2: "1.2 Year Manufacturing Warranty",
          },
          {
            label: "Warranty Service Type",
            product1: "For Warranty Claims or Any Product Related Issues Please Email at operations.com",
            product2: "For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com",
          },
          {
            label: "Covered in Warranty",
            product1: "Warranty Against Manufacturing Defect",
            product2: "Warranty of the product is limited to manufacturing defects only.",
          },
          {
            label: "Not Covered in Warranty",
            product1:
              "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
            product2:
              "The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.",
          },
          { label: "Domestic Warranty", product1: "1 Year", product2: "3 Months" },
        ],
      },
    };
  
    return (
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12 font-poppins">
        {Object.entries(specifications).map(([key, section]) => (
          <div key={key} className=" pb-10">
            {/* Section Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-6">{section.title}</h3>
  
            {/* Table Structure */}
            <div className="grid grid-cols-3 gap-6 items-start">
              {/* Labels */}
              <div className="space-y-6 text-gray-700 font-medium border-r border-lightGray border-opacity-50">
                {section.specs.map((spec, index) => (
                  <div key={index}>{spec.label}</div>
                ))}
              </div>
  
              {/* Product 1 Data */}
              <div className="space-y-6 text-gray-900  border-r border-lightGray border-opacity-50 h-full">
                {section.specs.map((spec, index) => (
                  <div key={index}>{spec.product1}</div>
                ))}
              </div>
  
              {/* Product 2 Data */}
              <div className="space-y-6 text-gray-900 ">
                {section.specs.map((spec, index) => (
                  <div key={index}>{spec.product2}</div>
                ))}
              </div>
            </div>
  
            {/* Buttons */}
            {key === "warranty" && (
              <div className="grid grid-cols-3 gap-6 items-center pt-6">
                <div>
                </div>
                <button className="py-3 w-36 bg-brown hover:bg-[#9d7829] text-white font-poppins rounded text-sm">
                  Add To Cart
                </button>
                <button className="py-3 w-36 bg-brown hover:bg-[#9d7829] text-white font-poppins rounded text-sm">
                  Add To Cart
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  