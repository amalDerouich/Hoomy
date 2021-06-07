import { ChartType } from './dashboard.model';

function getDaysInMonth(month, year) {
    const date = new Date(year, month, 1);
    const days = [];
    let idx = 0;
    while (date.getMonth() === month && idx < 15) {
        const d = new Date(date);
        days.push(d.getDate() + ' ' + d.toLocaleString('en-us', { month: 'short' }));
        date.setDate(date.getDate() + 1);
        idx += 1;
    }
    return days;
}

const now = new Date();
const labels = getDaysInMonth(now.getMonth(), now.getFullYear());
const revenueAreaChart: ChartType = {
    chart: {
        height: 282,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    tooltip: {
        theme: 'dark',
        x: { show: false }
    },
    stroke: {
        curve: 'smooth',
        width: 4
    },
    series: [{
        name: 'Electricité',
        data: [10, 20, 5, 15, 10, 20, 15, 25, 20, 30, 25, 40, 30, 50, 35]
    }],
    dataLabels: {
        enabled: false
    },
    zoom: {
        enabled: false
    },
    legend: {
        show: false
    },
    colors: ['#43d39e'],
    xaxis: {
        type: 'string',
        categories: labels,
        tooltip: {
            enabled: false
        },
        axisBorder: {
            show: false
        },
    },
    yaxis: {
        labels: {
            formatter(val) {
                return val + 'k';
            }
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            type: 'vertical',
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [45, 100]
        },
    },
};

const targetsBarChart: ChartType = {
    chart: {
        height: 282,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
        name: 'Bénéfits',
        data: [35, 44, 55, 57, 56, 61]
    }, {
        name: 'Electricité',
        data: [52, 76, 85, 101, 98, 87]
    }],
    xaxis: {
        categories: ['Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin'],
        axisBorder: {
            show: false
        },
    },
    legend: {
        show: false
    },
    grid: {
        row: {
            colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.2
        },
        borderColor: '#f3f4f7'
    },
    tooltip: {
        y: {
            formatter: (val: any) => {
                return 'DT ' + val + ' Gagner';
            }
        }
    },
    colors: ['#5369f8', '#43d39e', '#f77e53', '#ffbe0b'],
};

const salesDonutChart: ChartType = {
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
            },
            expandOnClick: false
        }
    },
    chart: {
        height: 298,
        type: 'donut',
    },
    colors: ['#5369f8', '#43d39e', '#f77e53', '#ffbe0b'],
    legend: {
        show: true,
        position: 'right',
        horizontalAlign: 'left',
        itemMargin: {
            horizontal: 6,
            vertical: 3
        }
    },
    series: [44, 55, 41, 17],
    labels: ['Electricité', 'Température', 'Humidité', 'Vent'],
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom'
            }
        }
    }],
    tooltip: {
        y: {
            formatter: (value) => {
                return value + 'k';
            }
        },
    }
};

/*------------------------- Orders table Data ----------------------- */

const ordersData = [
    {
        id: '#98754',
        product: 'Facture Electricité',
        name: 'Steg',
        price: 'DT79.49',
        status: 'Payer',
    },
    {
        id: '#98753',
        product: 'Facture Eau',
        name: 'Sonéde',
        price: 'DT125.49',
        status: 'En cours',
    },
    {
        id: '#98752',
        product: 'Facture Electricité',
        name: 'Steg',
        price: 'DT35.49',
        status: 'Non Payer',
    },
    {
        id: '#98751',
        product: 'Facture Electricité',
        name: 'Steg',
        price: 'DT49.49',
        status: 'Payer',
    },
    {
        id: '#98750',
        product: 'Facture Electricité',
        name: 'Steg',
        price: 'DT69.49',
        status: 'En cours',
    },
];

export { revenueAreaChart, targetsBarChart, salesDonutChart, ordersData };
