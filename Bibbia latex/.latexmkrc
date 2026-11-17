use POSIX qw(strftime);
my $date = strftime "%Y-%m-%d", localtime;
$success_cmd = 'cp "%D" "%R_' . $date . '.pdf"';
