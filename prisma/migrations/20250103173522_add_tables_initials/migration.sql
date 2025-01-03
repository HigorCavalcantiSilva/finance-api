-- CreateTable
CREATE TABLE "Salary" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "grossSalary" DOUBLE PRECISION NOT NULL,
    "netSalary" DOUBLE PRECISION NOT NULL,
    "followedUserId" INTEGER,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Salary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Earning" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "appellant" BOOLEAN NOT NULL,
    "deadline" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Earning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Expence" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "appellant" BOOLEAN NOT NULL,
    "deadline" BOOLEAN NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Expence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyBalance" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "month" TIMESTAMP(3) NOT NULL,
    "salary" DOUBLE PRECISION NOT NULL,
    "earningsFixes" DOUBLE PRECISION NOT NULL,
    "earningsExtras" DOUBLE PRECISION NOT NULL,
    "expensesFixes" DOUBLE PRECISION NOT NULL,
    "expensesExtras" DOUBLE PRECISION NOT NULL,
    "leftover" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonthlyBalance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyBalanceEarning" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "earningId" INTEGER NOT NULL,
    "monthlyBalanceId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonthlyBalanceEarning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonthlyBalanceExpence" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "expenceId" INTEGER NOT NULL,
    "monthlyBalanceId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonthlyBalanceExpence_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Saving" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "monthlyBalanceId" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Saving_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Salary" ADD CONSTRAINT "Salary_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Earning" ADD CONSTRAINT "Earning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expence" ADD CONSTRAINT "Expence_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyBalance" ADD CONSTRAINT "MonthlyBalance_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyBalanceEarning" ADD CONSTRAINT "MonthlyBalanceEarning_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyBalanceEarning" ADD CONSTRAINT "MonthlyBalanceEarning_earningId_fkey" FOREIGN KEY ("earningId") REFERENCES "Earning"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyBalanceEarning" ADD CONSTRAINT "MonthlyBalanceEarning_monthlyBalanceId_fkey" FOREIGN KEY ("monthlyBalanceId") REFERENCES "MonthlyBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyBalanceExpence" ADD CONSTRAINT "MonthlyBalanceExpence_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyBalanceExpence" ADD CONSTRAINT "MonthlyBalanceExpence_expenceId_fkey" FOREIGN KEY ("expenceId") REFERENCES "Expence"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonthlyBalanceExpence" ADD CONSTRAINT "MonthlyBalanceExpence_monthlyBalanceId_fkey" FOREIGN KEY ("monthlyBalanceId") REFERENCES "MonthlyBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Saving" ADD CONSTRAINT "Saving_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Saving" ADD CONSTRAINT "Saving_monthlyBalanceId_fkey" FOREIGN KEY ("monthlyBalanceId") REFERENCES "MonthlyBalance"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
