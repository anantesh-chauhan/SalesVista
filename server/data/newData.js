import mongoose from "mongoose";

 const user = Array.from({ length: 1000 }, (_, i) => ({
    _id: new mongoose.Types.ObjectId(),
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
    password: `${Math.random().toString(36).slice(-8)}`,
    city: `City ${i % 50 + 1}`,
    state: "ST",
    country: ["IN", "PK", "BD", "NP", "LK"][i % 5],
    occupation: `Occupation ${i % 20 + 1}`,
    phoneNumber: `9${Math.floor(1000000000 + Math.random() * 9000000000)}`,
    transactions: [
      new mongoose.Types.ObjectId(),
      new mongoose.Types.ObjectId()
    ],
    role: ["admin", "user", "superadmin"][i % 3]
  }));

  // Function to generate affiliate statistics
  export const generateAffiliateStats = (userCount) => {
    return Array.from({ length: userCount }, (_, i) => ({
      _id: new mongoose.Types.ObjectId(),
      userId: new mongoose.Types.ObjectId(),
      affiliateSales: Array.from({ length: Math.floor(Math.random() * 10) + 1 }, () => new mongoose.Types.ObjectId()),
    }));
  };

   const dataAffiliateStat = generateAffiliateStats(1000);

  // Function to generate overall statistics
  export const generateOverallStats = () => {
    const monthlyData = [
      "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ].map((month) => ({
      month,
      totalSales: Math.floor(Math.random() * 10000),
      totalUnits: Math.floor(Math.random() * 50000),
      _id: new mongoose.Types.ObjectId()
    }));
    const dailyData = Array.from({ length: 365 }, (_, i) => ({
      date: new Date(2024, 0, i + 1).toISOString().split('T')[0],
      totalSales: Math.floor(Math.random() * 300),
      totalUnits: Math.floor(Math.random() * 1000),
      _id: new mongoose.Types.ObjectId()
    }));
    return {
      totalCustomers: 1000,
      yearlySalesTotal: monthlyData.reduce((acc, cur) => acc + cur.totalSales, 0),
      yearlyTotalSoldUnits: monthlyData.reduce((acc, cur) => acc + cur.totalUnits, 0),
      year: new Date().getFullYear(),
      monthlyData,
      dailyData
    };
  };

   const dataOverallStat = generateOverallStats();

  // Function to generate transaction data
  export const generateTransactionData = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      _id: new mongoose.Types.ObjectId(),
      userId: new mongoose.Types.ObjectId(),
      amount: parseFloat((Math.random() * 1000).toFixed(2)),
      date: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString(),
      productId: new mongoose.Types.ObjectId(),
      cost: parseFloat((Math.random() * 500).toFixed(2))
    }));
  };

   const dataTransaction = generateTransactionData(1000);

   const dataProduct = Array.from({ length: 100 }, (_, i) => ({
    _id: new mongoose.Types.ObjectId(),
    name: `Product ${i + 1}`,
    price: parseFloat((Math.random() * 500).toFixed(2)),
    description: `Product description ${i + 1}`,
    category: ["clothing", "electronics", "grocery", "furniture", "toys"][i % 5],
    rating: parseFloat((Math.random() * 5).toFixed(2)),
    supply: Math.floor(Math.random() * 2000) + 100
  }));

  // Function to generate product statistics
  export const generateProductStats = (count) => {
    return Array.from({ length: count }, (_, i) => ({
      productId: new mongoose.Types.ObjectId(),
      yearlySalesTotal: Math.floor(Math.random() * 100000),
      yearlyTotalSoldUnits: Math.floor(Math.random() * 10000),
      monthlyData: Array.from({ length: 12 }, (_, month) => ({
        month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month],
        totalSales: Math.floor(Math.random() * 10000),
        totalUnits: Math.floor(Math.random() * 5000)
      })),
      dailyData: Array.from({ length: 365 }, (_, day) => ({
        date: new Date(2024, 0, day + 1).toISOString().split('T')[0],
        totalSales: Math.floor(Math.random() * 300),
        totalUnits: Math.floor(Math.random() * 1000)
      }))
    }));
  };

   const dataProductStat = generateProductStats(100);

  export {
    user,
    dataAffiliateStat,
    dataOverallStat,
    dataTransaction,
    dataProduct,
    dataProductStat
  };
  