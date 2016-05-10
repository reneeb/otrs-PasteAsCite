# --
# Kernel/Language/hu_PasteAsCite.pm - the Hungarian translation for PasteAsCite
# Copyright (C) 2014-2016 Perl-Services, http://www.perl-services.de
# Copyright (C) 2016 Balázs Úr, http://www.otrs-megoldasok.hu
# --
# This software comes with ABSOLUTELY NO WARRANTY. For details, see
# the enclosed file COPYING for license information (AGPL). If you
# did not receive this file, see http://www.gnu.org/licenses/agpl.txt.
# --

package Kernel::Language::hu_PasteAsCite;

use strict;
use warnings;

use utf8;

our $VERSION = 0.01;

sub Data {
    my $Self = shift;

    my $Lang = $Self->{Translation};

    return if ref $Lang ne 'HASH';

    # Kernel/Config/Files/PasteAsCite.xml
    $Lang->{'List of JS files to always be loaded for the agent interface.'} =
        'JS fájlok listája, amelyek mindig betöltődnek az ügyintézői felületnél.';

    return 1;
}

1;
