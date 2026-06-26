// ===== Central course metadata for AIE1901 =====
// Drives the shared header, footer, and nav across all pages.
const COURSE = {
    code: 'AIE1901',
    title: 'Large Language Models for Social Simulations',
    subtitle: '大语言模型驱动的社会模拟',
    semester: 'Term 1, 2025–26',
    instructor: {
        name: 'Prof. Zhanzhan Zhao',
        email: 'zhanzhanzhao@cuhk.edu.cn',
        office: 'TXB 908'
    },
    ta: {
        name: 'Xiao Jia',
        email: '225080011@link.cuhk.edu.cn',
        office: 'TXB 908'
    },
    classTime: 'Thursdays 1:30–3:20 pm',
    classroom: 'Teaching Complex C, Room 501',
    firstClass: 'Sep 4, 2025',
    institution: 'The Chinese University of Hong Kong, Shenzhen',
    address: '2001 Longxiang Road, Longgang District, Shenzhen',
    navPages: [
        { key: 'home',       label: 'Home',       href: 'index.html' },
        { key: 'outline',    label: 'Outline',    href: 'outline.html' },
        { key: 'schedule',   label: 'Schedule',   href: 'schedule.html' },
        { key: 'lecture',    label: 'Lecture',    href: 'lecture.html' },
        { key: 'lab',        label: 'Lab',        href: 'lab.html' },
        { key: 'assignment', label: 'Assignment', href: 'assignment.html' },
        { key: 'project',    label: 'Project',    href: 'project.html' },
        { key: 'materials',  label: 'Material',   href: 'materials.html' }
    ]
};

// Make available globally
window.COURSE = COURSE;
