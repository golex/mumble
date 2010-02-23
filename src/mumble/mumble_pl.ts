<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.0" language="pl_PL">
<context>
    <name>ACLEditor</name>
    <message>
        <location filename="ACLEditor.ui" line="411"/>
        <source>Active ACLs</source>
        <translation>Aktywne reguły ACL</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="513"/>
        <source>Context</source>
        <translation>Kontekst</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="554"/>
        <source>User/Group</source>
        <translation>Użytkownik / Grupa</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="579"/>
        <source>This controls which group of users this entry applies to.&lt;br /&gt;Note that the group is evaluated in the context of the channel the entry is used in. For example, the default ACL on the Root channel gives &lt;i&gt;Write&lt;/i&gt; permission to the &lt;i&gt;admin&lt;/i&gt; group. This entry, if inherited by a channel, will give a user write privileges if he belongs to the &lt;i&gt;admin&lt;/i&gt; group in that channel, even if he doesn&apos;t belong to the &lt;i&gt;admin&lt;/i&gt; group in the channel where the ACL originated.&lt;br /&gt;If a group name starts with a &apos;!&apos;, its membership is negated, and if it starts with a &apos;~&apos;, it is evaluated in the channel the ACL was defined in, rather than the channel the ACL is active in.&lt;br /&gt;If a group name starts with a  &apos;#&apos;, it is interpreted as an access token. Users must have entered whatever follows the &apos;#&apos; in their list of access tokens to match. This can be used for very simple password access to channels for non-authenticated users.&lt;br /&gt;If a group name starts with a  &apos;$&apos;, it will only match users whose certificate hash matches what follows the &apos;$&apos;.&lt;br /&gt;A few special predefined groups are:&lt;br /&gt;&lt;b&gt;all&lt;/b&gt; - Everyone will match.&lt;br /&gt;&lt;b&gt;auth&lt;/b&gt; - All authenticated users will match.&lt;br /&gt;&lt;b&gt;sub,a,b,c&lt;/b&gt; - User currently in a sub-channel minimum &lt;i&gt;a&lt;/i&gt; common parents, and between &lt;i&gt;b&lt;/i&gt; and &lt;i&gt;c&lt;/i&gt; channels down the chain. See the website for more extensive documentation on this one.&lt;br /&gt;&lt;b&gt;in&lt;/b&gt; - Users currently in the channel will match (convenience for &apos;&lt;i&gt;sub,0,0,0&lt;/i&gt;&apos;).&lt;br /&gt;&lt;b&gt;out&lt;/b&gt; - Users outside the channel will match (convenience for &apos;&lt;i&gt;!sub,0,0,0&lt;/i&gt;&apos;).&lt;br /&gt;Note that an entry applies to either a user or a group, not both.</source>
        <translation>Kontroluje, której grupy użytkowników dotyczy dana reguła.&lt;br /&gt;Należy pamiętać, że grupa jest sprawdzana w kontekście reguł jakie są w niej używane. Na przykład, na kanale Root domyślna reguła ACL nadaje uprawnienie &lt;i&gt;Edycji ACL&lt;/i&gt; grupie &lt;i&gt;admin&lt;/i&gt;. Jeżeli ta reguła zostanie odziedziczona przez kanał, nada ona uprawnienia zapisu ACL użytkownikowi który należy do grupy &lt;i&gt;admin&lt;/i&gt; na tym kanale, nawet gdy użytkownik nie należy do grupy &lt;i&gt;admin&lt;/i&gt; na kanale z którego reguły ACL pochodzą.&lt;br /&gt;Jeżeli nazwa grupy rozpoczyna od !, członkostwo użytkownika jest negowane, a gdy rozpoczyna się od ~, reguła jest sprawdzana na kanale gdzie została zdefiniowana, zamiast na kanale w którym reguła ACL jest aktywna. Kolejność jest ważna: &lt;i&gt;!~in&lt;/i&gt; jest ważny, ale &lt;i&gt;~!in&lt;/i&gt; nie jest.&lt;br /&gt;Jest kilka pre-definiowanych grup:&lt;br /&gt;&lt;b&gt;all&lt;/b&gt; - wszyscy użytkownicy będą pasować.&lt;br /&gt;&lt;b&gt;auth&lt;/b&gt; - Wszyscy uwierzytelnieni użytkownicy będą pasować.&lt;br /&gt;&lt;b&gt;sub,a,b,c&lt;/b&gt; - Użytkownicy znajdujący się w aktualnie w pod-kanele. Zobacz dokumentacje na stronie internetowej, aby dowiedzieć się więcej o tej funkcji.&lt;br /&gt;&lt;b&gt;in&lt;/b&gt; - Użytkownicy aktualnie znajdujący się na kanale (wygodniejsza metoda w porównaniu do &lt;i&gt;sub,0,0,0&lt;/i&gt;.&lt;br /&gt;&lt;b&gt;out&lt;/b&gt; - Użytkownicy nie znajdujący się na kanale będą pasować (wygodniejsza metoda w porównaniu do &lt;i&gt;!sub,0,0,0&lt;/i&gt;).&lt;br /&gt;Pamiętaj, że wpis może dotyczyć zarówno użytkownika lub grupy, a nie obu jednocześnie.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="626"/>
        <source>Permissions</source>
        <translation>Uprawnienia</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="560"/>
        <source>Group</source>
        <translation>Grupa</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="251"/>
        <source>Members</source>
        <translation>Członkowie</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="478"/>
        <source>&amp;Add</source>
        <translation>&amp;Dodaj</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="494"/>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="446"/>
        <source>&amp;Up</source>
        <translation>W &amp;górę</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="462"/>
        <source>&amp;Down</source>
        <translation>W &amp;dół</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="433"/>
        <source>Inherit ACLs</source>
        <translation>Dziedzicz reguły ACL</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="538"/>
        <source>Applies to this channel</source>
        <translation>Stosuj do tego kanału</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="525"/>
        <source>Applies to sub-channels</source>
        <translation>Stosuj do pod-kanałów</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="589"/>
        <source>User ID</source>
        <translation>ID Użytkownika</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="100"/>
        <source>Deny</source>
        <translation>Zabroń</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="102"/>
        <source>Allow</source>
        <translation>Zezwól</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="375"/>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="206"/>
        <source>Inherit</source>
        <translation>Dziedzicz</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="219"/>
        <source>Inheritable</source>
        <translation>Dziedziczny</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="235"/>
        <source>Inherited</source>
        <translation>Odziedziczony</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="361"/>
        <source>Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>Add to Remove</source>
        <translation type="obsolete">Dodaj do usunięcia</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="126"/>
        <source>&amp;Groups</source>
        <translation>&amp;Grupy</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="403"/>
        <source>&amp;ACL</source>
        <translation>&amp;ACL</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="417"/>
        <source>List of entries</source>
        <translation>Lista aktywnych reguł ACL</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="420"/>
        <source>This shows all the entries active on this channel. Entries inherited from parent channels will be show in italics.&lt;br /&gt;ACLs are evaluated top to bottom, meaning priority increases as you move down the list.</source>
        <translation>Wyświetla wszystkie aktywne reguły na tym kanale. Pozycje odziedziczone z kanałów nadrzędnych wyświetlone są przy użyciu kursywy.&lt;br /&gt;Lista ACL przetwarzana jest od góry do dołu, oznacza to, że pozycje znajdujące się na dole listy mają wyższy priorytet.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="427"/>
        <source>Inherit ACL of parent?</source>
        <translation>Dziedziczyć reguły ACL z kanałów nadrzędnych?</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="430"/>
        <source>This sets whether or not the ACL up the chain of parent channels are applied to this object. Only those entries that are marked in the parent as &quot;Apply to sub-channels&quot; will be inherited.</source>
        <translation>Ustawia czy reguły ACL mają być dziedziczone z kanałów nadrzędnych. Tylko reguły, które w kanałach nadrzędnych są oznaczone jako &quot;Dotyczy pod-kanałów&quot; będą dziedziczone.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="472"/>
        <source>Add new entry</source>
        <translation>Dodaj nową regułę</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="475"/>
        <source>This adds a new entry, initially set with no permissions and applying to all.</source>
        <translation>Dodaje nową regułę, która początkowo nie posiada uprawnień oraz jest zastosowana dla wszystkich.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="488"/>
        <source>Remove entry</source>
        <translation>Usuń regułę</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="491"/>
        <source>This removes the currently selected entry.</source>
        <translation>Usuwa aktualnie wybraną regułę.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="440"/>
        <source>Move entry up</source>
        <translation>Przenieś regułę w górę</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>Properties</source>
        <translation type="obsolete">Właściwości</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="33"/>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="40"/>
        <source>Enter the channel name here.</source>
        <translation>Wprowadź tutaj nazwę kanału.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="43"/>
        <source>&lt;b&gt;Name&lt;/b&gt;&lt;br&gt;Enter the channel name in this field. The name has to comply with the restriction imposed by the server you are connected to.</source>
        <translation>&lt;b&gt;Nazwa&lt;/b&gt;&lt;br&gt;Tutaj podaj nazwę kanału. Nazwa musi zgadzać się z ograniczeniem narzuconym przez serwer, do którego jesteś podłączony.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="50"/>
        <source>Description</source>
        <translation>Opis</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="57"/>
        <source>Password</source>
        <translation>Hasło</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="64"/>
        <source>Enter the channel password here.</source>
        <translation>Wprowadź tutaj hasło dla kanału.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="67"/>
        <source>&lt;b&gt;Password&lt;/b&gt;&lt;br&gt;This field allows you to easily set and change the password of a channel. In the background it uses Mumble&apos;s access tokens feature. To allow more fine grained and powerful access control directly use ACLs and groups instead (&lt;i&gt;Advanced configuration&lt;/i&gt; has to be checked to be able to see these settings).</source>
        <translation>&lt;b&gt;Hasło&lt;/b&gt;&lt;br&gt;To pole pozwala na łatwe ustawienie i zmianę hasła kanału. W tle, używa funkcji &quot;Hasła dostępu&quot;. Aby zezwolić na lepszy dostęp używaj bezpośrednio edytora ACL oraz Grup. Musisz włączyć &lt;i&gt;Zaawansowane&lt;/i&gt; by widzieć te opcje.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="74"/>
        <source>Check to create a temporary channel.</source>
        <translation>Zaznacz, aby utworzyć kanał tymczasowy.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="77"/>
        <source>&lt;b&gt;Temporary&lt;/b&gt;&lt;br&gt;
When checked the channel created will be marked as temporary. This means when the last player leaves it the channel will be automatically deleted by the server.</source>
        <translation>&lt;b&gt;Tymczasowy&lt;/b&gt;&lt;br&gt;Po włączeniu, kanał który utworzysz będzie oznaczony jako tymczasowy. Gdy ostatni użytkownik opuści ten kanał, zostanie on automatycznie usunięty przez serwer.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="81"/>
        <source>Temporary</source>
        <translation>Tymczasowy</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="94"/>
        <source>Channel positioning facility value</source>
        <translation>Pozycja kanału na liście</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="97"/>
        <source>&lt;b&gt;Position&lt;/b&gt;&lt;br/&gt;
This value enables you to change the way Mumble arranges the channels in the tree. A channel with a higher &lt;i&gt;Position&lt;/i&gt; value will always be placed below one with a lower value and the other way around. If the &lt;i&gt;Position&lt;/i&gt; value of two channels is equal they will get sorted alphabetically by their name.</source>
        <translation>&lt;b&gt;Pozycja&lt;/b&gt;&lt;br/&gt;
Ta wartość pozwala na zmianę sposobu w jaki są sortowane kanały. Kanał z wyższą wartością&lt;i&gt;Pozycja&lt;/i&gt; będzie umieszczony poniżej niższej wartości i na odwrót. Jeżeli &lt;i&gt;Pozycja&lt;/i&gt; dwóch kanałów jest identyczna zostaną one posortowane alfabetycznie.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="108"/>
        <source>Position</source>
        <translation>Pozycja</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="159"/>
        <source>&lt;b&gt;Group&lt;/b&gt;&lt;br&gt;
These are all the groups currently defined for the channel. To create a new group, just type in the name and press enter.</source>
        <translation>&lt;b&gt;Grupa&lt;/b&gt;&lt;br&gt;Znajdują się tutaj wszystkie grupy aktualnie zdefiniowane dla tego kanału. By utworzyć nową grupę, wpisz jej nazwę i naciśnij enter.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="170"/>
        <source>Add new group</source>
        <translation>Dodaj nową grupę</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="173"/>
        <source>&lt;b&gt;Add&lt;/b&gt;&lt;br/&gt;
Add a new group.</source>
        <translation>&lt;b&gt;Dodaj&lt;/b&gt;&lt;br/&gt;Dodaje nową grupę.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="187"/>
        <source>&lt;b&gt;Remove&lt;/b&gt;&lt;br&gt;This removes the currently selected group. If the group was inherited, it will not be removed from the list, but all local information about the group will be cleared.</source>
        <translation>&lt;b&gt;Usuń&lt;/b&gt;&lt;br&gt;Usuwa aktualnie wybraną grupę. Jeżeli grupa była dziedziczona, nie zostanie usunięta z listy, ale wszystkie lokalne informacje o tej grupie zostaną wyczyszczone.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="203"/>
        <source>&lt;b&gt;Inherit&lt;/b&gt;&lt;br&gt;This inherits all the members in the group from the parent, if the group is marked as &lt;i&gt;Inheritable&lt;/i&gt; in the parent channel.</source>
        <translation>&lt;b&gt;Dziedzicz&lt;/b&gt;&lt;br&gt;Dziedziczy wszystkich członków z grupy nadrzędnej, jeżeli grupa jest oznaczona jako &lt;i&gt;Dziedziczna&lt;/i&gt; w kanale nadrzędnym.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="216"/>
        <source>&lt;b&gt;Inheritable&lt;/b&gt;&lt;br&gt;This makes this group inheritable to sub-channels. If the group is non-inheritable, sub-channels are still free to create a new group with the same name.</source>
        <translation>&lt;b&gt;Dziedziczna&lt;/b&gt;&lt;br&gt;Umożliwia dziedziczenie uprawnień grupy w pod-kanałach. Jeżeli grupa nie pozwala na dziedziczenie, to w pod-kanałach można tworzyć grupy o tych samych nazwach.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="232"/>
        <source>&lt;b&gt;Inherited&lt;/b&gt;&lt;br&gt;This indicates that the group was inherited from the parent channel. You cannot edit this flag, it&apos;s just for information.</source>
        <translation>&lt;b&gt;Odziedziczona&lt;/b&gt;&lt;br&gt;Wskazuje czy grupa została odziedziczona z kanału nadrzędnego. Nie możesz edytować tej flagi, to jest tylko informacja.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="261"/>
        <source>Inherited members</source>
        <translation>Odziedziczeni członkowie</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="271"/>
        <source>Contains the list of members added to the group by this channel.</source>
        <translation>Zawiera listę członków dodanych do grupy na tym kanale.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="274"/>
        <source>&lt;b&gt;Members&lt;/b&gt;&lt;br&gt;
This list contains all members that were added to the group by the current channel. Be aware that this does not include members inherited by higher levels of the channel tree. These can be found in the &lt;i&gt;Inherited members&lt;/i&gt; list. To prevent this list to be inherited by lower level channels uncheck &lt;i&gt;Inheritable&lt;/i&gt; or manually add the members to the &lt;i&gt;Excluded members&lt;/i&gt; list.</source>
        <translation>&lt;b&gt;Członkowie&lt;/b&gt;&lt;br&gt;Ta lista zawiera wszystkich członków którzy zostali dodani do grupy na tym kanale. Należy pamiętać, że dane te nie obejmują użytkowników dziedziczonych z kanałów nadrzędnych. Znajdują się oni na liście  &lt;i&gt;Odziedziczeni członkowie&lt;/i&gt;. By zapobiegać dziedziczeniu tej listy przez pod-kanały odznacz &lt;i&gt;Dziedziczna&lt;/i&gt; lub manualnie dodaj członków do listy &lt;i&gt;Wykluczeni członkowie&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="282"/>
        <source>Contains a list of members whose group membership will not be inherited from the parent channel.</source>
        <translation>Zawiera listę członków których członkostwo w grupie nie będzie dziedziczone z kanałów nadrzędnych.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="285"/>
        <source>&lt;b&gt;Excluded members&lt;/b&gt;&lt;br&gt;
Contains a list of members whose group membership will not be inherited from the parent channel.</source>
        <translation>&lt;b&gt;Wykluczeni członkowie&lt;/b&gt;&lt;br&gt;Zawiera listę członków których członkowsto w grupie nie będzie dziedziczone z kanałów nadrzędnych.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="293"/>
        <source>Contains the list of members inherited by other channels.</source>
        <translation>Zawiera listę członków odziedziczonych z innych kanałów.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="296"/>
        <source>&lt;b&gt;Inherited members&lt;/b&gt;&lt;br&gt;
Contains the list of members inherited by the current channel. Uncheck &lt;i&gt;Inherit&lt;/i&gt; to prevent inheritance from higher level channels.</source>
        <translation>&lt;b&gt;Odziedziczeni członkowie&lt;/b&gt;&lt;br&gt;Zawiera listę członków odziedziczonych z innych kanałów. Odznacz &lt;i&gt;Dziedzicz&lt;/i&gt; by zapobiec dziedziczeniu z kanałów nadrzędnych.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="313"/>
        <source>Type in the name of a user you wish to add to the group and click Add.</source>
        <translation>Wpisz nazwę użytkownika którego chciałbyś dodać do grupy i kliknij Dodaj.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="345"/>
        <source>Type in the name of a user you wish to remove from the group and click Add.</source>
        <translation>Wpisz nazwę użytkownika którego chciałbyś osunąć z grupy i kliknij Usuń.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="382"/>
        <source>Exclude</source>
        <translation>Wyklucz</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="389"/>
        <source>Excluded members</source>
        <translation>Wykluczeni członkowie</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="443"/>
        <source>This moves the entry up in the list. As entries are evaluated in order, this may change the effective permissions of users. You cannot move an entry above an inherited entry, if you really need that you&apos;ll have to duplicate the inherited entry.</source>
        <translation>Przenosi regułę w górę listy. Jako że reguły są sprawdzane w kolejności, więc taka zmiana może mieć wpływ na uprawnienia użytkowników. Nie możesz przenieść reguły ponad regułę z której są dziedziczone ACL, jeżeli naprawdę tego potrzebujesz duplikuj daną regułę.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="456"/>
        <source>Move entry down</source>
        <translation>Przenieś regułę w dół</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="459"/>
        <source>This moves the entry down in the list. As entries are evaluated in order, this may change the effective permissions of users.</source>
        <translation>Przenosi regułę w dół listy. Jako że reguły są sprawdzane w kolejności, więc taka zmiana może mieć wpływ na uprawnienia użytkowników.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="532"/>
        <source>Entry should apply to this channel.</source>
        <translation>Reguła powinna być stosowana do tego kanału.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="535"/>
        <source>This makes the entry apply to this channel.</source>
        <translation>Sprawia, że reguła dotyczy tego kanału.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="519"/>
        <source>Entry should apply to sub-channels.</source>
        <translation>Reguła powinna być stosowana do pod-kanałów.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="522"/>
        <source>This makes the entry apply to sub-channels of this channel.</source>
        <translation>Sprawia, że reguła dotyczy pod-kanałów tego kanału.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="576"/>
        <source>Group this entry applies to</source>
        <translation>Reguły dotyczą</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>This controls which group of users this entry applies to.&lt;br /&gt;Note that the group is evaluated in the context of the channel the entry is used in. For example, the default ACL on the Root channel gives &lt;i&gt;Write&lt;/i&gt; permission to the &lt;i&gt;admin&lt;/i&gt; group. This entry, if inherited by a channel, will give a user write privileges if he belongs to the &lt;i&gt;admin&lt;/i&gt; group in that channel, even if he doesn&apos;t belong to the &lt;i&gt;admin&lt;/i&gt; group in the channel where the ACL originated.&lt;br /&gt;If a group name starts with a !, its membership is negated, and if it starts with a ~, it is evaluated in the channel the ACL was defined in, rather than the channel the ACL is active in. Order is important; &lt;i&gt;!~in&lt;/i&gt; is valid, but &lt;i&gt;~!in&lt;/i&gt; is not.&lt;br /&gt;A few special predefined groups are:&lt;br /&gt;&lt;b&gt;all&lt;/b&gt; - Everyone will match.&lt;br /&gt;&lt;b&gt;auth&lt;/b&gt; - All authenticated users will match.&lt;br /&gt;&lt;b&gt;sub,a,b,c&lt;/b&gt; - User currently in a sub-channel minimum &lt;i&gt;a&lt;/i&gt; common parents, and between &lt;i&gt;b&lt;/i&gt; and &lt;i&gt;c&lt;/i&gt; channels down the chain. See the website for more extensive documentation on this one.&lt;br /&gt;&lt;b&gt;in&lt;/b&gt; - Users currently in the channel will match (convenience for &lt;i&gt;sub,0,0,0&lt;/i&gt;).&lt;br /&gt;&lt;b&gt;out&lt;/b&gt; - Users outside the channel will match (convenience for &lt;i&gt;!sub,0,0,0&lt;/i&gt;).&lt;br /&gt;Note that an entry applies to either a user or a group, not both.</source>
        <translation type="obsolete">Kontroluje, której grupy użytkowników dotyczy dana reguła.&lt;br /&gt;Należy pamiętać, że grupa jest sprawdzana w kontekście reguł jakie są w niej używane. Na przykład, na kanale Root domyślna reguła ACL nadaje uprawnienie &lt;i&gt;Zapisz ACL&lt;/i&gt; grupie &lt;i&gt;admin&lt;/i&gt;. Jeżeli ta reguła zostanie odziedziczona przez kanał, nada ona uprawnienia zapisu ACL użytkownikowi który należy do grupy &lt;i&gt;admin&lt;/i&gt; na tym kanale, nawet gdy użytkownik nie należy do grupy &lt;i&gt;admin&lt;/i&gt; na kanale z którego reguły ACL pochodzą.&lt;br /&gt;Jeżeli nazwa grupy rozpoczyna od !, członkostwo użytkownika jest negowane, a gdy rozpoczyna się od ~, reguła jest sprawdzana na kanale gdzie została zdefiniowana, zamiast na kanale w którym reguła ACL jest aktywna. Kolejność jest ważna: &lt;i&gt;!~in&lt;/i&gt; jest ważny, ale &lt;i&gt;~!in&lt;/i&gt; nie jest.&lt;br /&gt;Jest kilka pre-definiowanych grup:&lt;br /&gt;&lt;b&gt;all&lt;/b&gt; - wszyscy użytkownicy będą pasować.&lt;br /&gt;&lt;b&gt;auth&lt;/b&gt; - Wszyscy uwierzytelnieni użytkownicy będą pasować.&lt;br /&gt;&lt;b&gt;sub,a,b,c&lt;/b&gt; - Użytkownicy znajdujący się w aktualnie w pod-kanele. Zobacz dokumentacje na stronie internetowej, aby dowiedzieć się więcej o tej funkcji.&lt;br /&gt;&lt;b&gt;in&lt;/b&gt; - Użytkownicy aktualnie znajdujący się na kanale (wygodniejsza metoda w porównaniu do &lt;i&gt;sub,0,0,0&lt;/i&gt;.&lt;br /&gt;&lt;b&gt;out&lt;/b&gt; - Użytkownicy nie znajdujący się na kanale będą pasować (wygodniejsza metoda w porównaniu do &lt;i&gt;!sub,0,0,0&lt;/i&gt;).&lt;br /&gt;Pamiętaj, że wpis może dotyczyć zarówno użytkownika lub grupy, a nie obu jednocześnie.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="605"/>
        <source>User this entry applies to</source>
        <translation>Reguła dotyczy tego użytkownika</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="608"/>
        <source>This controls which user this entry applies to. Just type in the user name and hit enter to query the server for a match.</source>
        <translation>Kontroluje do którego użytkownika należy ta reguła. Wpisz nazwę użytkownika i naciśnij Enter by wysłać zapytanie do serwera w celu sprawdzenia poprawności nazwy użytkownika.</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="124"/>
        <source>Allow %1</source>
        <translation>Zezwól %1</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="115"/>
        <source>Deny %1</source>
        <translation>Zabroń %1</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="54"/>
        <source>Mumble - Add channel</source>
        <translation>Mumble - Dodaj kanał</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="238"/>
        <source>Failed: Invalid channel</source>
        <translation>Niepowodzenie: Niepoprawny kanał</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="88"/>
        <source>Mumble - Edit %1</source>
        <translation>Mumble - Edycja %1</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="125"/>
        <source>This grants the %1 privilege. If a privilege is both allowed and denied, it is denied.&lt;br /&gt;%2</source>
        <translation>Przydziela uprawnienie: &lt;i&gt;%1&lt;/i&gt;. Jeżeli uprawnienie jest jednocześnie dozwolone i zabronione, to jest zabronione.&lt;br /&gt;%2</translation>
    </message>
    <message>
        <location filename="ACLEditor.cpp" line="116"/>
        <source>This revokes the %1 privilege. If a privilege is both allowed and denied, it is denied.&lt;br /&gt;%2</source>
        <translation>Odbiera uprawnienie: &lt;i&gt;%1&lt;/i&gt;. Jeżeli uprawnienie jest jednocześnie dozwolone i zabronione, to jest zabronione.&lt;br /&gt;%2</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="156"/>
        <source>List of groups</source>
        <translation>Lista zdefiniowanych grup</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>This is all the groups currently defined for the channel. To create a new group, just type in the name and press enter.</source>
        <translation type="obsolete">To jest lista wszystkich grup zdefiniowanych dla tego kanału. Aby utworzyć nową grupę wpisz jej nazwę i naciśnij Enter.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="184"/>
        <source>Remove selected group</source>
        <translation>Usuń wybraną grupę</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>This removes the currently selected group. If the group was inherited, it will not be removed from the list, but all local information about the group will be cleared.</source>
        <translation type="obsolete">Usuwa aktualnie wybrana grupę. Jeśli grupa była dziedziczona, to nie zostanie usunięta z listy, ale wszystkie lokalne informacje o tej grupie zostaną wyczyszczone.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="200"/>
        <source>Inherit group members from parent</source>
        <translation>Dziedzicz członków grupy z grupy nadrzędnej</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>This inherits all the members in the group from the parent, if the group is marked as &lt;i&gt;Inheritable&lt;/i&gt; in the parent channel.</source>
        <translation type="obsolete">Dziedziczy wszystkich członków z grupy nadrzędnej, jeżeli grupa jest oznaczona jako .&lt;i&gt;Dziedziczna&lt;/i&gt; w kanale nadrzędnym.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="213"/>
        <source>Make group inheritable to sub-channels</source>
        <translation>Umożliw dziedziczenie grupy w pod-kanałach</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>This makes this group inheritable to sub-channels. If the group is non-inheritable, sub-channels are still free to create a new group with the same name.</source>
        <translation type="obsolete">Umożliwia dziedziczenie uprawnień grupy w pod-kanałach. Jeżeli grupa nie pozwala na dziedziczenie, to w pod-kanałach można tworzyć grupy o tych samych nazwach.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="229"/>
        <source>Group was inherited from parent channel</source>
        <translation>Grupa została odziedziczona z kanału nadrzędnego</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>This indicates that the group was inherited from the parent channel. You cannot edit this flag, it&apos;s just for information.</source>
        <translation type="obsolete">Wskazuje czy grupa została odziedziczona z kanału nadrzędnego. Nie możesz edytować tej flagi, to jest tylko informacja.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="310"/>
        <source>Add member to group</source>
        <translation>Dodaj członka do grupy</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="342"/>
        <source>Remove member from group</source>
        <translation>Usuń członka z grupy</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>Mumble - Edit ACL for %1</source>
        <translation type="obsolete">Mumble - edycja reguł ACL dla kanału %1</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="14"/>
        <source>Dialog</source>
        <translation>Dialog</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>Type in the name of a player you wish to add to the group and click Add.</source>
        <translation type="obsolete">Wpisz nazwę użytkownika, którego chcesz dodać do grupy i kliknij Dodaj.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="0"/>
        <source>Type in the name of a player you wish to remove from the group and click Add.</source>
        <translation type="obsolete">Wpisz nazwę użytkownika, którego chcesz usunąć z grupy i kliknij Dodaj.</translation>
    </message>
    <message>
        <location filename="ACLEditor.ui" line="24"/>
        <source>&amp;Properties</source>
        <translation>&amp;Właściwości</translation>
    </message>
</context>
<context>
    <name>ALSAAudioInput</name>
    <message>
        <location filename="ALSAAudio.cpp" line="363"/>
        <source>Opening chosen ALSA Input failed: %1</source>
        <translation>Otwieranie wybranego Wejścia ALSA nie powiodło się: %1</translation>
    </message>
    <message>
        <location filename="ALSAAudio.cpp" line="172"/>
        <source>Default ALSA Card</source>
        <translation>Domyślna karta ALSA</translation>
    </message>
</context>
<context>
    <name>ALSAAudioOutput</name>
    <message>
        <location filename="ALSAAudio.cpp" line="498"/>
        <source>Opening chosen ALSA Output failed: %1</source>
        <translation>Otwieranie wybranego wyjścia ALSA nie powiodło się: %1</translation>
    </message>
    <message>
        <location filename="ALSAAudio.cpp" line="173"/>
        <source>Default ALSA Card</source>
        <translation>Domyślna karta ALSA</translation>
    </message>
</context>
<context>
    <name>ASIOConfig</name>
    <message>
        <location filename="ASIOInput.ui" line="20"/>
        <source>Device selection</source>
        <translation>Wybieranie urządzenia</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="81"/>
        <source>Capabilities</source>
        <translation>Możliwości</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="107"/>
        <source>Buffer size</source>
        <translation>Rozmiar bufora</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="133"/>
        <source>This will configure the input channels for ASIO. Make sure you select at least one channel as microphone and speaker. &lt;i&gt;Microphone&lt;/i&gt; should be where your microphone is attached, and &lt;i&gt;Speaker&lt;/i&gt; should be a channel that samples &apos;&lt;i&gt;What you hear&lt;/i&gt;&apos;.&lt;br /&gt;For example, on the Audigy 2 ZS, a good selection for Microphone would be &apos;&lt;i&gt;Mic L&lt;/i&gt;&apos; while Speaker should be &apos;&lt;i&gt;Mix L&lt;/i&gt;&apos; and &apos;&lt;i&gt;Mix R&lt;/i&gt;&apos;.</source>
        <translation>Konfiguracja wejściowych kanałów dla ASIO. Upewnij się, że wybierasz przynajmniej jeden kanał jako mikrofon oraz jeden jako głośniki czy słuchawki. Kanał &lt;i&gt;Mikrofon&lt;/i&gt; powinien być ustawiony na kanał pod którym masz podłączony mikrofon, a dla &lt;i&gt;Głośniki&lt;/i&gt; kanał który przetwarza &quot;&lt;i&gt;to co słyszysz&lt;/i&gt;&quot;. Na przykład dla Audigy 2 ZS dobrym wyborem dla Mikrofonu będzie &quot;&lt;i&gt;Mic L&lt;/i&gt;&quot; a dla Głośników &quot;&lt;i&gt;Mix L&lt;/i&gt;&quot; i &quot;&lt;i&gt;Mix R&lt;/i&gt;&quot;.</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="136"/>
        <source>Channels</source>
        <translation>Kanały</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="130"/>
        <source>Configure input channels</source>
        <translation>Konfiguruj kanały wejścia</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="42"/>
        <source>Device to use for microphone</source>
        <translation>Urządzenie do którego jest podłączony mikrofon</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="45"/>
        <source>This chooses what device to query. You still need to actually query the device and select which channels to use.</source>
        <translation>Wybiera które urządzenie sprawdzić. Nadal musisz sprawdzić urządzenie oraz wybrać kanały do wykorzystania.</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="26"/>
        <source>Device</source>
        <translation>Urządzenie</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="52"/>
        <source>Query selected device</source>
        <translation>Sprawdź wybrane urządzenie</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="55"/>
        <source>This queries the selected device for channels. Be aware that many ASIO drivers are buggy to the extreme, and querying them might cause a crash of either the application or the system.</source>
        <translation>Wykrywa ilość kanałów obsługiwanych przez wybrane urządzenie. &lt;b&gt;Uwaga:&lt;/b&gt; wiele sterowników ASIO jest tak wadliwych, że sprawdzanie ich może spowodować zawieszenie się programu lub całego systemu.</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="65"/>
        <source>Configure selected device</source>
        <translation>Konfiguruj wybrane urządzenie</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="68"/>
        <source>This configures the selected device. Be aware that many ASIO drivers are buggy to the extreme, and querying them might cause a crash of either the application or the system.</source>
        <translation>Konfiguruje wybrane urządzenie. &lt;b&gt;Uwaga:&lt;/b&gt; wiele sterowników ASIO jest tak wadliwych, że sprawdzanie ich może spowodować zawieszenie się programu lub całego systemu.</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="87"/>
        <source>Driver name</source>
        <translation>Nazwa sterownika</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="0"/>
        <source>Buffersize</source>
        <translation type="obsolete">Rozmiar bufora</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="157"/>
        <source>Microphone</source>
        <translation>Mikrofon</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="305"/>
        <source>&lt;-</source>
        <translation>&lt;-</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="292"/>
        <source>-&gt;</source>
        <translation>-&gt;</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="243"/>
        <source>Unused</source>
        <translation>Nieużywany</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="329"/>
        <source>Speakers</source>
        <translation>Głośniki</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="0"/>
        <source>%1 (ver %2)</source>
        <translation type="obsolete">%1 (wersja %2)</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="0"/>
        <source>%1 ms -&gt; %2 ms (%3 ms resolution) %4Hz</source>
        <translation type="obsolete">%1 ms -&gt; %2 ms (%3 ms rozdzielczość) %4Hz</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="0"/>
        <source>%1 ms -&gt; %2 ms (%3 ms resolution) %4Hz -- Unusable</source>
        <translation type="obsolete">%1 ms -&gt; %2 ms (%3 ms rozdzielczość) %4Hz -- Niemożliwy do wykorzystania</translation>
    </message>
    <message>
        <location filename="ASIOInput.cpp" line="224"/>
        <source>%1 (version %2)</source>
        <translation>%1 (wersja %2)</translation>
    </message>
    <message>
        <location filename="ASIOInput.cpp" line="227"/>
        <source>%1 -&gt; %2 samples buffer, with %3 sample resolution (%4 preferred) at %5 Hz</source>
        <translation>%1 -&gt; %2 bufor próbkowania, o rozdzielczości %3 (preferowana %4) na %5 Hz</translation>
    </message>
    <message>
        <location filename="ASIOInput.cpp" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="ASIOInput.cpp" line="296"/>
        <source>ASIO Initialization failed: %1</source>
        <translation>Inizjalizacja ASIO nie powiodła się: %1</translation>
    </message>
    <message>
        <location filename="ASIOInput.cpp" line="300"/>
        <source>Failed to instantiate ASIO driver</source>
        <translation>Wytwarzanie sterownika ASIO nie powiodło się</translation>
    </message>
    <message>
        <location filename="ASIOInput.cpp" line="337"/>
        <source>ASIO</source>
        <translation>ASIO</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="58"/>
        <source>&amp;Query</source>
        <translation>&amp;Sprawdź</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="71"/>
        <source>&amp;Configure</source>
        <translation>&amp;Konfiguruj</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="14"/>
        <source>Form</source>
        <translation>Formularz</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="0"/>
        <source>TextLabel</source>
        <translation type="obsolete">Tekst</translation>
    </message>
    <message>
        <location filename="ASIOInput.ui" line="0"/>
        <source>This will configure the input channels for ASIO. Make sure you select at least one channel as microphone and speaker. &lt;i&gt;Microphone&lt;/i&gt; should be where your microphone is attached, and &lt;i&gt;Speaker&lt;/i&gt; should be a channel that samples &lt;i&gt;What you hear&lt;/i&gt;.&lt;br /&gt;For example, on the Audigy 2 ZS, a good selection for Microphone would be &lt;i&gt;Mic L&lt;/i&gt; while Speaker should be &lt;i&gt;Mix L&lt;/i&gt; and &lt;i&gt;Mix R&lt;/i&gt;.</source>
        <translation type="obsolete">Tutaj znajduje się konfiguracja kanałów wejściowych ASIO. Upewnij się, że wybierzesz przynajmniej jeden kanał mikrofonu i głośnika.&lt;br /&gt; &lt;i&gt;Mikrofon&lt;/i&gt;powinien być tam gdzie podłączyłeś swój mikrofon, a &lt;i&gt;Głośniki&lt;/i&gt; powinny być w kanałach z &lt;i&gt;Co słyszysz&lt;/i&gt;.&lt;br /&gt;Dla przykładu: Audigy 2 ZS dobrym wyborem dla mikrofonu był &lt;i&gt;Mic L&lt;/i&gt; a głośniki powinny być w &lt;i&gt;MixR&lt;i&gt; i&lt;/i&gt; MixL&lt;/i&gt;.</translation>
    </message>
</context>
<context>
    <name>ASIOInput</name>
    <message>
        <location filename="ASIOInput.ui" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="ASIOInput.cpp" line="418"/>
        <source>You need to select at least one microphone and one speaker source to use ASIO. If you just need microphone sampling, use DirectSound.</source>
        <translation>Musisz wybrać przynajmniej jeden mikrofon oraz jedno źródło głośnika, aby używać ASIO. Jeżeli potrzebujesz tylko próbkowania mikrofonu używaj DirectSound.</translation>
    </message>
    <message>
        <location filename="ASIOInput.cpp" line="520"/>
        <source>Opening selected ASIO device failed. No input will be done.</source>
        <translation>Otwieranie wybranego urządzenia ASIO nie powiodło się. Żadne wejście nie jest gotowe.</translation>
    </message>
</context>
<context>
    <name>AboutDialog</name>
    <message>
        <location filename="About.cpp" line="63"/>
        <source>&amp;About Mumble</source>
        <translation>&amp;O Mumble</translation>
    </message>
    <message>
        <location filename="About.cpp" line="64"/>
        <source>&amp;License</source>
        <translation>&amp;Licencja</translation>
    </message>
    <message>
        <location filename="About.cpp" line="66"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="About.cpp" line="37"/>
        <source>About Mumble</source>
        <translation>O Mumble</translation>
    </message>
    <message>
        <location filename="About.cpp" line="58"/>
        <source>&lt;h3&gt;Mumble (%1)&lt;/h3&gt;&lt;p&gt;Copyright %3 Thorvald Natvig&lt;br /&gt;slicer@users.sourceforge.net&lt;/p&gt;&lt;p&gt;&lt;b&gt;A voice-chat utility for gamers&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;tt&gt;&lt;a href=&quot;%2&quot;&gt;%2&lt;/a&gt;&lt;/tt&gt;&lt;/p&gt;</source>
        <translation>&lt;h3&gt;Mumble v%1&lt;/h3&gt;&lt;p&gt;Copyright %3 Thorvald Natvig&lt;br /&gt;slicer@users.sourceforge.net&lt;/p&gt;&lt;p&gt;&lt;b&gt;Polskie tłumaczenie:&lt;/b&gt;&lt;br&gt;Bartek Sumowski&lt;br /&gt; &lt;a href=http://mumble.stranded.eu&gt;mumble.stranded.eu&lt;/a&gt;&lt;br /&gt; Michał Żukowski&lt;br&gt;&lt;a href=http://isports.pl/~zuko&gt;zuko.isports.pl&lt;/a&gt;&lt;/p&gt;&lt;p&gt;Błędy oraz sugestie odnośnie tłumaczenia &lt;br /&gt;prosimy zgłaszać na &lt;a href=http://sourceforge.net/apps/phpbb/mumble/index.php&gt;forum Mumble&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Komunikator głosowy dla graczy&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;tt&gt;&lt;a href=&quot;%2&quot;&gt;%2&lt;/a&gt;&lt;/tt&gt;&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>AboutSpeexDialog</name>
    <message>
        <location filename="About.cpp" line="84"/>
        <source>&lt;h3&gt;About Speex&lt;/h3&gt;&lt;p&gt;&lt;tt&gt;&lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;&lt;/tt&gt;&lt;/p&gt;&lt;p&gt;This program uses SpeexDSP.&lt;/p&gt;&lt;p&gt;Speex is used for echo cancellation, noise&lt;br /&gt;filtering and voice activity detection.&lt;/p&gt;</source>
        <translation>&lt;h3&gt;O Speex&lt;/h3&gt;&lt;p&gt;&lt;tt&gt;&lt;a href=&quot;%1&quot;&gt;%1&lt;/a&gt;&lt;/tt&gt;&lt;/p&gt;&lt;p&gt;Program używa SpeexDSP.&lt;/p&gt;&lt;p&gt;Speex używany jest do usuwania echa, szumu&lt;br /&gt;oraz detekcji mowy.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="About.cpp" line="86"/>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <location filename="About.cpp" line="74"/>
        <source>About Speex</source>
        <translation>O Speex</translation>
    </message>
    <message>
        <location filename="About.cpp" line="0"/>
        <source>&lt;h3&gt;About Speex&lt;/h3&gt;&lt;p&gt;&lt;tt&gt;&lt;a href=&quot;%2&quot;&gt;%2&lt;/a&gt;&lt;/tt&gt;&lt;/p&gt;&lt;p&gt;This program uses Speex version %1&lt;/p&gt;&lt;p&gt;Speex is used for echo cancellation, noise&lt;br /&gt;filtering, voice activity detection and speech&lt;br /&gt;compression.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;h3&gt;O Speex&lt;/h3&gt;&lt;p&gt;&lt;tt&gt;&lt;a href=&quot;%2&quot;&gt;%2&lt;/a&gt;&lt;/tt&gt;&lt;/p&gt;&lt;p&gt;Program używa kodeka Speex w wersji %1&lt;/p&gt;&lt;p&gt;Speex jest używany do usuwania akustycznego echa, filtrowania szumów, detekcji aktywacji głosowej, kompresji.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>AudioInput</name>
    <message>
        <location filename="AudioInput.ui" line="14"/>
        <source>Form</source>
        <translation>Formularz</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="20"/>
        <source>Interface</source>
        <translation>Interfejs</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="26"/>
        <source>System</source>
        <translation>System</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="42"/>
        <source>Input method for audio</source>
        <translation>Metoda wejścia dźwięku</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="45"/>
        <source>&lt;b&gt;This is the input method to use for audio.&lt;/b&gt;&lt;br /&gt;Most likely you want to use DirectSound.</source>
        <translation>&lt;b&gt;Metoda wejścia dźwięku.&lt;/b&gt;&lt;br /&gt;Najprawdopodobniej chcesz korzystać z DirectSound.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="68"/>
        <source>Device</source>
        <translation>Urządzenie</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="84"/>
        <source>Input device for audio</source>
        <translation>Wejściowe urządzenie audio</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="87"/>
        <source>&lt;b&gt;This is the input device to use for audio.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Jest to wejściowe urządzenie audio.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>Cancel Echo</source>
        <translation type="obsolete">Usuwanie akustycznego echa</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="141"/>
        <source>Transmission</source>
        <translation>Transmisja</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="147"/>
        <source>&amp;Transmit</source>
        <translation>&amp;Sposób transmisji głosu</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="157"/>
        <source>When to transmit your speech</source>
        <translation>Kiedy wysyłać twój głos</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="160"/>
        <source>&lt;b&gt;This sets when speech should be transmitted.&lt;/b&gt;&lt;br /&gt;&lt;i&gt;Continuous&lt;/i&gt; - All the time&lt;br /&gt;&lt;i&gt;Voice Activity&lt;/i&gt; - When you are speaking clearly.&lt;br /&gt;&lt;i&gt;Push To Talk&lt;/i&gt; - When you hold down the hotkey set under &lt;i&gt;Shortcuts&lt;/i&gt;.</source>
        <translation>&lt;b&gt;Określa kiedy to co mówisz powinno zostać wysłane.&lt;/b&gt;&lt;br /&gt;&lt;i&gt;Ciągłe nadawanie&lt;/i&gt; - Cały czas.&lt;br /&gt;&lt;i&gt;Aktywacja głosowa&lt;/i&gt; - Gdy mówisz wyraźnie.&lt;br /&gt;&lt;i&gt;Aktywacja przyciskiem&lt;/i&gt; - Gdy trzymasz wciśnięty przycisk ustawiony w &lt;i&gt;Skróty&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="219"/>
        <source>DoublePush Time</source>
        <translation>Czas podwójnego kliknięcia</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>TextLabel</source>
        <translation type="obsolete">Etykieta tekstowa</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>Audible audio cue when push-to-talk pressed and released</source>
        <translation type="obsolete">&lt;b&gt;Aktywując tę opcję usłyszysz charakterystyczny dźwięk.&lt;/b&gt;&lt;br /&gt;Podczas wciskania przycisku do rozmowy usłyszysz dźwięk z gry PacMan.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="341"/>
        <source>&lt;b&gt;This enables the audio cues for push to talk.&lt;/b&gt;&lt;br /&gt;Setting this will give you a short audio beep when push to talk is pressed and released.</source>
        <translation>&lt;b&gt;Aktywuje potwierdzenie dźwiękowe przy użyciu opcji aktywacji przyciskiem&lt;/b&gt;&lt;br /&gt;Podczas wciskania i zwalniania przycisku usłyszysz dźwięk potwierdzający rozpoczęcie oraz zakończenie transmisji.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="344"/>
        <source>PTT Audio cue</source>
        <translation>PTT Audio Cue</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="357"/>
        <source>Use SNR based speech detection</source>
        <translation>Używaj detekcji na podstawie SNR (Singal-To-Noise Ratio / Stosunek Sygnału-Do-Szumu)</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>&lt;b&gt;This sets speech detection to use Signal to Noise ratio.&lt;/b&gt;&lt;br /&gt;In this mode, the input is analyzed for something resembling a clear singal, and the clarity of that signal is used to trigger speech detection.</source>
        <translation type="obsolete">&lt;b&gt;Analiza na podstawie czystego sygnału.&lt;/b&gt; W tym trybie, źródło dźwięku jest analizowane pod kątem tzw. czystego sygnału, czystość tego sygnału jest używana do uaktywnienia wykrywania mowy.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="363"/>
        <source>Signal to Noise</source>
        <translation>Stosunek Sygnału-Do-Szumu (SNR)</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>Use Amplitude based speech detection.</source>
        <translation type="obsolete">Używaj detekcji na podstawie Amplitudy.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="373"/>
        <source>&lt;b&gt;This sets speech detection to use Amplitude.&lt;/b&gt;&lt;br /&gt;In this mode, the raw strength of the input signal is used to detect speech.</source>
        <translation>&lt;b&gt;Określa sposób detekcji głosu na analizę Amplitudy.&lt;/b&gt; W tym trybie, źródło dźwięku jest analizowane pod kątem siły sygnału, mocniejszy sygnał uaktywnia transmisję głosu.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="376"/>
        <source>Amplitude</source>
        <translation>Amplituda</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="385"/>
        <source>Voice &amp;Hold</source>
        <translation>Czas podtrzymania &amp;transmisji</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="395"/>
        <source>How long to keep transmitting after silence</source>
        <translation>Jak długo utrzymywać transmisje po zakończeniu wypowiedzi</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>&lt;b&gt;This selects how long after a perceived stop in speech transmission should continue.&lt;/b&gt;&lt;br /&gt;Set this higher if your voice breaks up when you speak (seen by a rapidly blinking voice icon next to your name).&lt;br /&gt;Only makes sense when used with Voice Activity transmission.</source>
        <translation type="obsolete">&lt;b&gt;Określa jak długo utrzymywać transmisje po zakończeniu wypowiedzi.&lt;/b&gt;&lt;br /&gt;Ustaw wyższą wartość gdy twoje wypowiedzi są przerywane (można to zauważyć poprzeż szybkie miganie ikony przy twoim nicku).</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="443"/>
        <source>Silence Below</source>
        <translation>Cisza</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>Signal values below this counts as silence</source>
        <translation type="obsolete">Sygnał poniżej podanej wartości traktowany jest jako cisza</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="485"/>
        <source>&lt;b&gt;This sets the trigger values for voice detection.&lt;/b&gt;&lt;br /&gt;Use this together with the Audio Statistics window to manually tune the trigger values for detecting speech. Input values below &quot;Silence Below&quot; always count as silence. Values above &quot;Speech Above&quot; always count as voice. Values in between will count as voice if you&apos;re already talking, but will not trigger a new detection.</source>
        <translation>&lt;b&gt;Określa próg aktywacji dla detekcji mowy.&lt;/b&gt;&lt;br /&gt;Użyj tego razem ze &lt;i&gt;Statystykami&lt;/i&gt; aby manualnie wyregulować próg aktywacji głosowej. Wartości wejścia poniżej &quot;Cisza&quot; zawsze są traktowane jako cisza. Wartości powyżej &quot;Mowa&quot; zawsze są traktowane jako mowa. Wartości pomiędzy są traktowane jako mowa, ale nie uaktywnią nowej detekcji.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="475"/>
        <source>Speech Above</source>
        <translation>Mowa</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="482"/>
        <source>Signal values above this count as voice</source>
        <translation>Sygnał powyżej podanej wartości traktowany jest jako mowa</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="515"/>
        <source>Compression</source>
        <translation>Kompresja</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="521"/>
        <source>&amp;Quality</source>
        <translation>&amp;Jakość</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="531"/>
        <source>Quality of compression (peak bandwidth)</source>
        <translation>Jakość kompresji (maksymalne pasmo)</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="534"/>
        <source>&lt;b&gt;This sets the quality of compression.&lt;/b&gt;&lt;br /&gt;This determines how much bandwidth Mumble is allowed to use for outgoing audio.</source>
        <translation>&lt;b&gt;Określa jakość kompresji.&lt;/b&gt;&lt;br /&gt;Określa również, ile pasma Mumble może wykorzystać podczas wysyłania dźwięku.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="572"/>
        <source>Audio per packet</source>
        <translation>Dźwięk na pakiet</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="582"/>
        <source>How many audio frames to send per packet</source>
        <translation>Ile ramek dźwięku ma być wysyłane na pakiet</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="585"/>
        <source>&lt;b&gt;This selects how many audio frames should be put in one packet.&lt;/b&gt;&lt;br /&gt;Increasing this will increase the latency of your voice, but will also reduce bandwidth requirements.</source>
        <translation>&lt;b&gt;Określa ile ramek dźwięku powinno być umieszczonych w jednym pakiecie.&lt;/b&gt;&lt;br /&gt;Zwiększanie ilości milisekund opóźni przesyłanie twojego głosu, ale dzięki temu zużyjesz mniej pasma.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>Maximum bandwidth used for sent audio</source>
        <translation type="obsolete">Maksymalna ilość przepustowości łącza</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="625"/>
        <source>&lt;b&gt;This shows peak outgoing bandwidth used.&lt;/b&gt;&lt;br /&gt;This shows the peak amount of bandwidth sent out from your machine. Audio bitrate is the maximum bitrate (as we use VBR) for the audio data alone. Position is the bitrate used for positional information. Overhead is our framing and the IP packet headers (IP and UDP is 75% of this overhead).</source>
        <translation>&lt;b&gt;Wyświetla maksymalne pasmo jakie może być użyte.&lt;/b&gt;&lt;br /&gt;Wyświetla maksymalne pasmo jakie może być wykorzystane przy wysyłaniu z twojego komputera. Bitrate dźwięku (użyte jest VBR) jest maksymalnym bitrate dla samego dźwięku. Położenie jest to bitrate zawierający informacje wykorzystywane przy dźwięku pozycyjnym. Obciążenie są to nagłówki pakietów (IP i UDP stanowi 75% obciążenia).</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="641"/>
        <source>Audio Processing</source>
        <translation>Przetwarzanie dźwięku</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="647"/>
        <source>Noise Suppression</source>
        <translation>Tłumienie hałasu</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="657"/>
        <source>Noise suppression</source>
        <translation>Tłumienie hałasu</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="660"/>
        <source>&lt;b&gt;This sets the amount of noise suppression to apply.&lt;/b&gt;&lt;br /&gt;The higher this value, the more aggressively stationary noise will be suppressed.</source>
        <translation>&lt;b&gt;Określa wartość wyciszania hałasu.&lt;/b&gt;&lt;br /&gt;Im wyższa wartość tym bardziej dźwięk będzie wyciszany.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="692"/>
        <source>Amplification</source>
        <translation>Wzmocnienie dźwięku</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="702"/>
        <source>Maximum amplification of input sound</source>
        <translation>Maksymalne wzmocnienie dźwięku wejściowego</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="705"/>
        <source>&lt;b&gt;Maximum amplification of input.&lt;/b&gt;&lt;br /&gt;Mumble normalizes the input volume before compressing, and this sets how much it&apos;s allowed to amplify.&lt;br /&gt;The actual level is continually updated based on your current speech pattern, but it will never go above the level specified here.&lt;br /&gt;If the &lt;i&gt;Microphone loudness&lt;/i&gt; level of the audio statistics hover around 100%, you probably want to set this to 2.0 or so, but if, like most people, you are unable to reach 100%, set this to something much higher.&lt;br /&gt;Ideally, set it so &lt;i&gt;Microphone Loudness * Amplification Factor &gt;= 100&lt;/i&gt;, even when you&apos;re speaking really soft.&lt;br /&gt;&lt;br /&gt;Note that there is no harm in setting this to maximum, but Mumble will start picking up other conversations if you leave it to auto-tune to that level.</source>
        <translation>&lt;b&gt;Maksymalne wzmocnienie wejścia.&lt;/b&gt;&lt;br /&gt;Mumble normalizuje poziom głośności przed kompresją, opcja ta określa dozwolony poziom wzmocnienia.&lt;br /&gt;Rzeczywisty poziom jest stale aktualizowany w oparciu o aktualną strukturę twojej wypowiedzi, ale nigdy nie przekracza poziomu określonego tutaj.&lt;br /&gt; Jeżeli poziom głośności mikrofonu w statystykach wynosi około 100% to prawdopodobnie powinieneś ustawić wartość na 2.0, ale gdy nie będziesz w stanie osiągnąć 100%, tak jak większość użytkowników, ustaw wyższą wartość.&lt;br /&gt;Najleszym ustawieniem będzie: &lt;i&gt;głośność mikrofonu * czynnik wzmocnienia &gt;= 100&lt;/i&gt; nawet gdy mówisz bardzo miękko. Pamiętaj, ustawienie maksymalnej wartości niczemu nie zaszkodzi, ale Mumble zacznie przechwytywać inne rozmowy jeżeli zostawisz wzmocnienie dźwięku do automatycznego dostrojenia by osiągnąć ten poziom.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="433"/>
        <source>Current speech detection chance</source>
        <translation>Aktualna szansa na wykrycie mowy</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="100"/>
        <source>Cancel echo from speakers</source>
        <translation>Usuwa echo z głośników</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="103"/>
        <source>Enabling this will cancel the echo from your speakers. Mixed has low CPU impact, but only works well if your speakers are equally loud and equidistant from the microphone. Multichannel echo cancellation provides much better echo cancellation, but at a higher CPU cost.</source>
        <translation>Włączenie spowoduje usuwanie echa dochodzącego z głośników. &lt;i&gt;Pomieszane&lt;/i&gt; ma mały wpływ ma procesor, ale działa tylko na bardzo głośno ustawione głośniki. &lt;i&gt;Multi-kanałowe&lt;/i&gt; usuwanie echa dostarcza lepszą jakość ale skutkuje to większym wykorzystaniem procesora.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="107"/>
        <source>Disabled</source>
        <translation>Wyłączone</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="112"/>
        <source>Mixed</source>
        <translation>Pomieszane</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="117"/>
        <source>Multichannel</source>
        <translation>Multi-kanałowe</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="125"/>
        <source>Echo</source>
        <translation>Usuwanie echa</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="229"/>
        <source>If you press the PTT key twice in this time it will get locked.</source>
        <translation>Jeżeli naciśniesz przycisk PTT podwójnie w tym czasie, zostanie on zablokowany.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="232"/>
        <source>&lt;b&gt;DoublePush Time&lt;/b&gt;&lt;br /&gt;If you press the push-to-talk key twice during the configured interval of time it will be locked. Mumble will keep transmitting until you hit the key once more to unlock PTT again.</source>
        <translation>&lt;b&gt;Czas podwójnego kliknięcia&lt;/b&gt;&lt;br/&gt;Jeżeli wciśniesz przycisk PTT (Naciśnij-i-Mów) dwukrotnie, we wskazanym czasie, wówczas Mumble będzie stale transmitować twój głos dopóki ponownie nie wciśniesz przycisku PTT.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="258"/>
        <source>Gets played when the PTT button is pressed</source>
        <translation>Odtwarza dźwięk kiedy wciskany jest przycisk PTT</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="265"/>
        <source>Gets played when the PTT button is released</source>
        <translation>Odtwarza dźwięk kiedy puszczany jest przycisk PTT</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="272"/>
        <source>Reset audio cue to default</source>
        <translation>Ustaw domyślny dźwięk PTT</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="275"/>
        <source>&lt;b&gt;Reset&lt;/b&gt;&lt;br/&gt;Reset the paths for the files to their default.</source>
        <translation>&lt;b&gt;Resetuj&lt;/b&gt;&lt;br/&gt;Resetuje ścieżki dla plików dźwiękowych do wartości domyślnych.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="278"/>
        <source>Reset</source>
        <translation>Resetuj</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="285"/>
        <source>Browse for on audio file</source>
        <translation>Przeglądaj w poszukiwaniu pliku dźwiękowego</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="298"/>
        <source>Browse</source>
        <translation>Przeglądaj</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="295"/>
        <source>Browse for off audio file</source>
        <translation>Przeglądaj w poszukiwaniu pliku dźwiękowego</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="305"/>
        <source>Off</source>
        <translation>Wyłączany</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="315"/>
        <source>On</source>
        <translation>Włączany</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="325"/>
        <source>Preview the audio cues</source>
        <translation>Podgląd plików audio</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="328"/>
        <source>&lt;b&gt;Preview&lt;/b&gt;&lt;br/&gt;Plays the current &lt;i&gt;on&lt;/i&gt; soundfile followed by the current &lt;i&gt;off&lt;/i&gt; soundfile.</source>
        <translation>&lt;b&gt;Podgląd&lt;/b&gt;&lt;br/&gt;Odtwarza aktualnie ustawione dźwięki dla obu wartości &lt;i&gt;Włączany&lt;/i&gt; i &lt;i&gt;Wyłączany&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="331"/>
        <source>Preview</source>
        <translation>Podgląd</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="338"/>
        <source>Audible audio cue when push-to-talk is activated or deactivated</source>
        <translation>Kiedy wciskasz lub puszczasz przycisk transmisji głosu zostanie odtworzony dźwięk potwierdzający rozpoczęcie lub zakończenie transmisji</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="360"/>
        <source>&lt;b&gt;This sets speech detection to use Signal to Noise ratio.&lt;/b&gt;&lt;br /&gt;In this mode, the input is analyzed for something resembling a clear signal, and the clarity of that signal is used to trigger speech detection.</source>
        <translation>&lt;b&gt;Określa sposób detekcji głosu na stosunek Sygnału-Do-Szumu.&lt;/b&gt;&lt;br /&gt;W tym trybie sygnał wejściowy jest analizowany jako czysty, a czystość tego sygnału używana jest do włączania transmisji głosowej.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="436"/>
        <source>&lt;b&gt;This shows the current speech detection settings.&lt;/b&gt;&lt;br /&gt;You can change the settings from the Settings dialog or from the Audio Wizard.</source>
        <translation>&lt;b&gt;Wyświetla aktualne ustawienia wykrywania mowy.&lt;/b&gt;&lt;br /&gt;Możesz zmienić te ustawienia w &lt;i&gt;Konfiguracja&lt;/i&gt; lub w &lt;i&gt;Kreatorze ustawień dźwięku&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="167"/>
        <source>Idle AutoMute</source>
        <translation>Automatyczne wyciszanie</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="174"/>
        <source>How long to remain idle before auto-mute.</source>
        <translation>Ile czasu musisz pozostać bezczynnym by zostać automatycznie wyciszonym.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="177"/>
        <source>This sets an idle timer. If the timer expires without any audio being sent to the server, you are muted.</source>
        <translation>Tutaj możesz ustawić czas bezczynności. Jeżeli przez ten czas nie wyślesz żadnego pakietu do serwera, zostaniesz automatycznie wyciszony.</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="450"/>
        <source>Signal values below this count as silence</source>
        <translation>Sygnał poniżej tej wartości zalicza się jako cisza</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="622"/>
        <source>Maximum bandwidth used for sending audio</source>
        <translation>Maksymalne pasmo używane do wysyłania dźwięku</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="0"/>
        <source>&lt;b&gt;This sets the amount of noise suppression to apply.&lt;/b&gt;&lt;br /&gt;The higher this value, the more aggressively stationary noise will be supressed.</source>
        <translation type="obsolete">&lt;b&gt;Ta opcja określa wartość tłumienia hałasu.&lt;/b&gt;&lt;br /&gt;Zwiększenie tej wartości powoduje agresywniejsze tłumienie hałasu.</translation>
    </message>
    <message>
        <location filename="AudioInput.cpp" line="528"/>
        <source>Server maximum network bandwidth is only %1 kbit/s. Audio quality auto-adjusted to %2 kbit/s (%3ms)</source>
        <translation>Maksymalna przepustowość serwera to tylko %1 kbit/s. Jakość mowy została automatycznie dopasowana do %2 kbit/s (%3ms)</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="370"/>
        <source>Use Amplitude based speech detection</source>
        <translation>Używaj detekcji na podstawie Amplitudy</translation>
    </message>
    <message>
        <location filename="AudioInput.ui" line="398"/>
        <source>&lt;b&gt;This selects how long after a perceived stop in speech transmission should continue.&lt;/b&gt;&lt;br /&gt;Set this higher if your voice breaks up when you speak (seen by a rapidly blinking voice icon next to your name).</source>
        <translation>&lt;b&gt;Określa jak długo utrzymywać transmisje po zakończeniu wypowiedzi.&lt;/b&gt;&lt;br /&gt;Ustaw wyższą wartość gdy twoje wypowiedzi są przerywane (można to zauważyć poprzez szybkie miganie ikony przy twoim nicku).</translation>
    </message>
</context>
<context>
    <name>AudioInputDialog</name>
    <message>
        <location filename="AudioConfigDialog.cpp" line="74"/>
        <source>Continuous</source>
        <translation>Ciągłe nadawanie</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="75"/>
        <source>Voice Activity</source>
        <translation>Aktywacja głosowa</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="76"/>
        <source>Push To Talk</source>
        <translation>Aktywacja przyciskiem</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="89"/>
        <source>Audio Input</source>
        <translation>Wejście audio</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="193"/>
        <source>%1 ms</source>
        <translation>%1 ms</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="229"/>
        <source>Off</source>
        <translation>Wyłączone</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="199"/>
        <source>%1 s</source>
        <translation>%1 s</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="203"/>
        <source>%1 kb/s</source>
        <translation>%1 kb/s</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="214"/>
        <source>-%1 dB</source>
        <translation>-%1 dB</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="269"/>
        <source>%1 kbit/s (Audio %2 %5, Position %4, Overhead %3)</source>
        <translation>%1 kbit/s (Dźwięk %2 %5, Pozycja %4, Obciążenie %3)</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="269"/>
        <source>CELT</source>
        <translation>CELT</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="269"/>
        <source>Speex</source>
        <translation>Speex</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="0"/>
        <source>%1kbit/s (Audio %2, Position %4, Overhead %3)</source>
        <translation type="obsolete">%1 kbit/s (Dźwięk %2, Położenie %4, Obciążenie %3)</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="227"/>
        <source>%1 min</source>
        <translation>%1 min</translation>
    </message>
</context>
<context>
    <name>AudioOutput</name>
    <message>
        <location filename="AudioOutput.ui" line="14"/>
        <source>Form</source>
        <translation>Formularz</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="20"/>
        <source>Interface</source>
        <translation>Interfejs</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="26"/>
        <source>System</source>
        <translation>System</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="42"/>
        <source>Output method for audio</source>
        <translation>Metoda wyjścia dźwięku</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="45"/>
        <source>&lt;b&gt;This is the output method to use for audio.&lt;/b&gt;&lt;br /&gt;Most likely you want to use DirectSound.</source>
        <translation>&lt;b&gt;Metoda wyjścia dźwięku.&lt;/b&gt;&lt;br /&gt;Najprawdopodobniej chcesz korzystać z DirectSound.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="68"/>
        <source>Device</source>
        <translation>Urządzenie</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="84"/>
        <source>Output device for audio</source>
        <translation>Urządzenie wyjściowe dla dźwięku</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="87"/>
        <source>&lt;b&gt;This is the output device to use for audio.&lt;/b&gt;</source>
        <translation>&lt;b&gt;To jest urządzenie wyjściowe dla dźwięku.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="320"/>
        <source>Positional Audio</source>
        <translation>Dźwięk pozycyjny</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="110"/>
        <source>Audio Output</source>
        <translation>Wyjście audio</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="116"/>
        <source>Default &amp;Jitter Buffer</source>
        <translation>Domyślny bufor &amp;drgań</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="126"/>
        <source>Safety margin for jitter buffer</source>
        <translation>Granica bezpieczeństwa dla bufora drgań</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="129"/>
        <source>&lt;b&gt;This sets the minimum safety margin for the jitter buffer.&lt;/b&gt;&lt;br /&gt;All incoming audio is buffered, and the jitter buffer continually tries to push the buffer to the minimum sustainable by your network, so latency can be as low as possible. This sets the minimum buffer size to use. If the start of sentences you hear is very jittery, increase this value.</source>
        <translation>&lt;b&gt;Granica bezpieczeństwa dla bufora drgań.&lt;/b&gt;&lt;br /&gt;Każdy przychodzący dźwięk jest najpierw buforowany, a bufor drgań nieustannie stara się utrzymać minimalną ilość danych która jest odpowiednia dla twojej sieci, przez co opóźnienie jest najniższe jak to tylko możliwe. Określa minimalny rozmiar bufora jaki może być użyty. Jeżeli mowa jest dla ciebie lekko zniekształcona spróbuj zwiększyć ilość milisekund.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="326"/>
        <source>The connected &quot;speakers&quot; are actually headphones</source>
        <translation>Podłączone &quot;głośniki&quot; to w rzeczywistości słuchawki</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="349"/>
        <source>Minimum distance to user before sound volume decreases</source>
        <translation>Minimalna odległość od użytkownika zanim głośność dźwięku zostanie zmniejszona</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="355"/>
        <source>This sets the minimum distance for sound calculations. The volume of other users&apos; speech will not decrease until they are at least this far away from you.</source>
        <translation>Określa minimalną odległość przy której jest obliczenia pozycja dźwięku. Głośność mowy użytkowników nie obniży się dopóki nie będą znajdowali się w określonej odległości od ciebie.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="397"/>
        <source>This sets the maximum distance for sound calculations. When farther away than this, other users&apos; speech volume will not decrease any further.</source>
        <translation>Określa maksymalną odległość przy której jest obliczenia pozycja dźwięku. Jeżeli użytkownik znajduje się dalej niż ustalona tutaj odległość, głośność mowy użytkowników nie bedzie już zmniejszana.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="529"/>
        <source>&lt;b&gt;This sets the packet latency variance for loopback testing.&lt;/b&gt;&lt;br /&gt;Most audio paths contain some variable latency. This allows you to set that variance for loopback mode testing. For example, if you set this to 15ms, this will emulate a network with 20-35ms ping latency or one with 80-95ms latency. Most domestic net connections have a variance of about 5ms.</source>
        <translation>&lt;b&gt;Określa opóźnienie pakietów dla trybu testowego.&lt;/b&gt;&lt;bt /&gt;Większość ścieżek audio zawiera jakąś przybliżoną wartość opóźnienia. Umożliwia to ustawienie opóźnienia dla trybu testowego. Na przykład, jeżeli ustawisz 15ms, rozpocznie się emulacja sieci z opóźnieniami w granicach 20-35ms lub 80-95ms. Opuźnienie w większości domowych połączeń internetowych waha się w granicach 5ms.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="613"/>
        <source>&lt;b&gt;This enables one of the loopback test modes.&lt;/b&gt;&lt;br /&gt;&lt;i&gt;None&lt;/i&gt; - Loopback disabled&lt;br /&gt;&lt;i&gt;Local&lt;/i&gt; - Emulate a local server.&lt;br /&gt;&lt;i&gt;Server&lt;/i&gt; - Request loopback from server.&lt;br /&gt;Please note than when loopback is enabled, no other users will hear your voice. This setting is not saved on application exit.</source>
        <translation>&lt;b&gt;Włącza jeden z trybów testowych.&lt;/b&gt;&lt;br /&gt;&lt;i&gt;Brak&lt;/i&gt; - Tryb testowy wyłączony&lt;br /&gt;&lt;i&gt;Lokalny&lt;/i&gt; - Emuluj serwera lokalnego.&lt;br /&gt;&lt;i&gt;Serwer&lt;/i&gt; - Test na serwerze.&lt;br /&gt;Prosimy zauważyć, gdy tryb testowy jest włączony, żaden użytkownik cię nie usłyszy, więc możesz mówić swobodnie. Tryb testowy jest wyłączany przy wyjściu z programu.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>TextLabel</source>
        <translation type="obsolete">Tekst</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="161"/>
        <source>Volume</source>
        <translation>Głośność</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="171"/>
        <source>Volume of incoming speech</source>
        <translation>Głośność dźwięku przychodzącego</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="174"/>
        <source>&lt;b&gt;This adjusts the volume of incoming speech.&lt;/b&gt;&lt;br /&gt;Note that if you increase this beyond 100%, audio will be distorted.</source>
        <translation>&lt;b&gt;Pozwala na określenie głośności mowy mowy.&lt;/b&gt;&lt;br /&gt;Każda wartość powyżej 100% sprawi, że dźwięk będzie trochę zniekształcony.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="200"/>
        <source>Output Delay</source>
        <translation>Opóźnienie wyjścia</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="210"/>
        <source>Amount of data to buffer</source>
        <translation>Ilość danych przechowywanych w buforze</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>This sets the amount of data to prebuffer in the output buffer. Experiment with different values and set it to the lowest which doesn&apos;t cause rapid jitter in the sound.</source>
        <translation type="obsolete">Ustala ilość danych które trafiają do przed-bufora w buforze wyjścia. Eksperymentowanie z różnymi wartościami i ustawienie ich na najniższy poziom nie skutkują natychmiastowym rozsynchronizowaniem się dźwięku.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>Volume attenuation</source>
        <translation type="obsolete">Dźwięk pozycyjny</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>MinDistance</source>
        <translation type="obsolete">Minimalny zasięg</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>Minimum distance to player before sound decreases</source>
        <translation type="obsolete">Ustawia minimalny zasięg
przechwytywania źródeł dźwięku</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>This sets the minimum distance for sound calculations. The volume of other players&apos; speech will not decrease until they are at least this far away from you.</source>
        <translation type="obsolete">Ustawia minimalny zasięg przechwytywania źródeł dźwięku. Głośność innych użytkowników nie będzie się zmieniać dopóki nie znajdą się dalej niż wskazuje minimalny dystans.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>MaxDistance</source>
        <translation type="obsolete">Maksymalny zasięg</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>Maximum distance, beyond which sound won&apos;t decrease</source>
        <translation type="obsolete">Ustawia maksymalny zasięg
przechwytywania źródeł dźwięku</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>This sets the maximum distance for sound calculations. When farther away than this, other players&apos; sound volume will not decrease any more.</source>
        <translation type="obsolete">Ustawia maksymalny zasięg przechwytywania źródeł dźwięku.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>RollOff</source>
        <translation type="obsolete">Zanikanie dźwięku</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="436"/>
        <source>Factor for sound volume decrease</source>
        <translation>Jak szybko odbierany dźwięk ma zanikać</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>How fast should sound volume drop when passing beyond the minimum distance. The normal (1.0) is that sound volume halves each time the distance doubles. Increasing this value means sound volume drops faster, while decreasing it means it drops slower.</source>
        <translation type="obsolete">Jak szybko głośność powinna spadać, gdy przekroczy minimalny zasięg przechwytywania dźwięku.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="465"/>
        <source>Bloom</source>
        <translation>Zmienna głośność</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="510"/>
        <source>Loopback Test</source>
        <translation>Tryb testowy</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="516"/>
        <source>Delay Variance</source>
        <translation>Opóźnienie pakietów</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="526"/>
        <source>Variance in packet latency</source>
        <translation>Opóźnienie pakietów podczas testu</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>&lt;b&gt;This sets the packet latency variance for loopback testing.&lt;/b&gt;&lt;br /&gt;Most audio paths contain some variable latency. This allows you set that variance for loopback mode testing. For example, if you set this to 15ms, this will emulate a network with 20-35ms ping latency or one with 80-95ms latency. Most domestic net connections have a variance of about 5ms</source>
        <translation type="obsolete">&lt;b&gt;Ta opcja ustawia długość opóźnienia pakietów dla trybu testowego.&lt;/b&gt;&lt;br /&gt;Na przykład jeśli ustawisz 15 milisekund test zacznie emulować opóźnienie sieci z pingiem 20-35 milisekund lub 80-95 milisekund. Większość połączeń różni się między sobą o około 5 milisekund.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="555"/>
        <source>Packet Loss</source>
        <translation>Utracone pakiety</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="565"/>
        <source>Packet loss for loopback mode</source>
        <translation>Ilość utraconych pakietów podczas testu</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="568"/>
        <source>&lt;b&gt;This sets the packet loss for loopback mode.&lt;/b&gt;&lt;br /&gt;This will be the ratio of packets lost. Unless your outgoing bandwidth is peaked or there&apos;s something wrong with your network connection, this will be 0%</source>
        <translation>&lt;b&gt;Określa ilość utraconych pakietów w trybie testowym.&lt;/b&gt;&lt;br /&gt;Jest to stosunek pakietów utraconych. O ile cała przepustowość wysyłania nie jest zajęta lub masz jakikolwiek problem ze swoim połączeniem, będzie to 0%</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="600"/>
        <source>&amp;Loopback</source>
        <translation>&amp;Wybierz tryb</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="610"/>
        <source>Desired loopback mode</source>
        <translation>Tryb testu</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>&lt;b&gt;This enables one of the loopback testmodes.&lt;/b&gt;&lt;br /&gt;&lt;i&gt;None&lt;/i&gt; - Loopback disabled&lt;br /&gt;&lt;i&gt;Local&lt;/i&gt; - Emulate a local server.&lt;br /&gt;&lt;i&gt;Server&lt;/i&gt; - Request loopback from server.&lt;br /&gt;Please note than when loopback is enabled, no other players will hear your voice. This setting is not saved on application exit.</source>
        <translation type="obsolete">Ta opcja uaktywnia tryb testowy.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="488"/>
        <source>Factor for sound volume increase</source>
        <translation>Czynnik wpływający na zwiększenie głośności</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>The connected &quot;speakers&quot; are actually headphones.</source>
        <translation type="obsolete">Podłączone &quot;głośniki&quot; to w rzeczywistości słuchawki.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="339"/>
        <source>Minimum Distance</source>
        <translation>Minimalna odległość</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="384"/>
        <source>Maximum Distance</source>
        <translation>Maksymalna odległość</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="394"/>
        <source>Maximum distance, beyond which speech volume won&apos;t decrease</source>
        <translation>Określa maksymalną odległość po której dźwięk nie będzie dalej ściszany</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>This sets the maximum distance for sound calculations. When farther away than this, other players&apos; speech volume will not decrease any further.</source>
        <translation type="obsolete">Ta opcja ustawia maksymalną odległość słyszalności dźwięku. W zależności od ustawienia odległości, mowa innych użytkowników nie będzie słyszana głośniej.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="426"/>
        <source>Minimum Volume</source>
        <translation>Minimalna głośność</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="439"/>
        <source>What should the volume be at the maximum distance?</source>
        <translation>Jaka powinna być głośność maksymalnej odległości?</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="491"/>
        <source>How much should sound volume increase for sources that are really close?</source>
        <translation>Jak bardzo Mumble powinien zmieniać głośność dla źródeł dźwięku, które są zbyt blisko?</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>Connected &quot;speakers&quot; are actually headphones.</source>
        <translation type="obsolete">&lt;b&gt;Jeśli w tej chwli używasz słuchawek&lt;/b&gt; to zaznacz tę opcję. Jest to ważne, bo zazwyczaj głośniki są przed tobą a słuchawki bezpośrednio z lewej i prawej.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="329"/>
        <source>Checking this indicates that you don&apos;t have speakers connected, just headphones. This is important, as speakers are usually in front of you, while headphones are directly to your left/right.</source>
        <translation>Wybierz gdy używasz słuchawek zamiast głośników. Jest to ważne, gdyż zazwyczaj głośniki są przed tobą a słuchawki bezpośrednio z lewej i prawej.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="332"/>
        <source>Headphones</source>
        <translation>Słuchawki</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>Other Applications</source>
        <translation type="obsolete">Inne aplikacje</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="213"/>
        <source>This sets the amount of data to pre-buffer in the output buffer. Experiment with different values and set it to the lowest which doesn&apos;t cause rapid jitter in the sound.</source>
        <translation>Określa ilość danych, które są wstępnie wczytywane do bufora wyjścia. Poeksperymentuj z różnymi wartościami i ustaw je na najniższą, możliwą wartość która nie powoduje przycinania dźwięku.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>Volume of other applications during speech</source>
        <translation type="obsolete">Głośność innych aplikacji podczas rozmowy</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="0"/>
        <source>&lt;b&gt;Decrease volume of other applications during speech.&lt;/b&gt;&lt;br /&gt;Mumble supports decreasing the volume of other applications during incoming speech. This sets the relative volume of other applications when others are talking.</source>
        <translation type="obsolete">&lt;b&gt;Zmniejsza głośność innych aplikacji podczas rozmowy.&lt;/b&gt;&lt;br /&gt;Mumble wspiera obniżanie głośności innych aplikacji podczas nadchodzącej rozmowy. Ta opcja ustawia względną głośność innych aplikacji kiedy inni mówią.
&lt;b&gt;UWAGA!&lt;/b&gt; Działa tylko na Windows VISTA SP1.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="239"/>
        <source>Attenuate applications by...</source>
        <translation>Tłum aplikacje o...</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="255"/>
        <source>Attenuation of other applications during speech</source>
        <translation>Tłumienie innych aplikacji podczas mowy</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="258"/>
        <source>&lt;b&gt;Attenuate volume of other applications during speech&lt;/b&gt;&lt;br /&gt;Mumble supports decreasing the volume of other applications during incoming and/or outgoing speech. This sets the attenuation of other applications if the feature is enabled.</source>
        <translation>&lt;b&gt;Tłumienie innych aplikacji podczas mowy&lt;/b&gt;&lt;br /&gt;Mumble obsługuje zmniejszanie głośności innych aplikacji podczas gdy ktoś do ciebie mówi lub ty mówisz. Określa poziom tłumienia innych aplikacji gdy ta funkcja jest włączona.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="286"/>
        <source>If checked Mumble lowers the volume of other applications while other users talk</source>
        <translation>Gdy zaznaczone Mumble zmniejszy głośność innych aplikacji gdy inni użytkownicy mówią</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="289"/>
        <source>&lt;b&gt;Attenuate applications while other users talk&lt;/b&gt;&lt;br /&gt;Mumble supports decreasing the volume of other applications during incoming and/or outgoing speech. This makes mumble activate the feature while other users talk to you.</source>
        <translation>&lt;b&gt;Tłumienie innych aplikacji podczas mowy innych użytkowników&lt;/b&gt;&lt;br /&gt;Mumble obsługuje zmniejszanie głośności innych aplikacji podczas gdy ktoś do ciebie mówi lub ty mówisz. Aktywuje tą funkcję gdy inny użytkownik mówi do ciebie.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="292"/>
        <source>while other users talk</source>
        <translation>gdy inni użytkownicy mówią</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="299"/>
        <source>If checked Mumble lowers the volume of other applications while you talk</source>
        <translation>Gdy zaznaczone Mumble zmniejszy głośność innych aplikacji gdy ty mówisz</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="302"/>
        <source>&lt;b&gt;Attenuate applications while you talk&lt;/b&gt;&lt;br /&gt;Mumble supports decreasing the volume of other applications during incoming and/or outgoing speech. This makes mumble activate the feature while you talk.</source>
        <translation>&lt;b&gt;Tłumienie innych aplikacji podczas twojej mowy&lt;/b&gt;&lt;br /&gt;Mumble obsługuje zmniejszanie głośności innych aplikacji podczas gdy ktoś do ciebie mówi lub ty mówisz. Aktywuje tą funkcję gdy ty mówisz.</translation>
    </message>
    <message>
        <location filename="AudioOutput.ui" line="305"/>
        <source>while you talk</source>
        <translation>gdy ty mówisz</translation>
    </message>
</context>
<context>
    <name>AudioOutputDialog</name>
    <message>
        <location filename="AudioConfigDialog.cpp" line="394"/>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="395"/>
        <source>Local</source>
        <translation>Lokalny</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="396"/>
        <source>Server</source>
        <translation>Serwer</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="402"/>
        <source>Audio Output</source>
        <translation>Wyjście audio</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="531"/>
        <source>%1 ms</source>
        <translation>%1 ms</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="562"/>
        <source>%1 %</source>
        <translation>%1 %</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="552"/>
        <source>%1 m</source>
        <translation>%1 m</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="0"/>
        <source>%1%</source>
        <translation type="obsolete">%1%</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="0"/>
        <source>%1ms</source>
        <translation type="obsolete">%1 ms</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="0"/>
        <source>%1m</source>
        <translation type="obsolete">%1m</translation>
    </message>
    <message>
        <location filename="AudioConfigDialog.cpp" line="0"/>
        <source>%1</source>
        <translation type="obsolete">%1</translation>
    </message>
</context>
<context>
    <name>AudioOutputSample</name>
    <message>
        <location filename="AudioOutput.cpp" line="295"/>
        <source>Choose sound file</source>
        <translation>Wybierz plik dźwiękowy</translation>
    </message>
    <message>
        <location filename="AudioOutput.cpp" line="299"/>
        <source>Invalid sound file</source>
        <translation>Nieprawidłowy plik dźwiękowy</translation>
    </message>
    <message>
        <location filename="AudioOutput.cpp" line="300"/>
        <source>The file &apos;%1&apos; cannot be used by Mumble. Please select a file with a compatible format and encoding.</source>
        <translation>Plik &apos;%1&apos; nie mógł zostać użyty przez Mumble. Prosimy wybrać plik z obsługiwanym formatem pliku.</translation>
    </message>
</context>
<context>
    <name>AudioStats</name>
    <message>
        <location filename="AudioStats.ui" line="28"/>
        <source>Peak microphone level</source>
        <translation>Maksymalny poziom mikrofonu</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="48"/>
        <source>Peak speaker level</source>
        <translation>Maksymalny poziom głośników</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="68"/>
        <source>Peak clean level</source>
        <translation>Maksymalny poziom czystości</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="78"/>
        <source>This shows the peak power in the last frame (20 ms) after all processing. Ideally, this should be -96 dB when you&apos;re not talking. In reality, a sound studio should see -60 dB, and you should hopefully see somewhere around -20 dB. When you are talking, this should rise to somewhere between -5 and -10 dB.&lt;br /&gt;If you are using echo cancellation, and this rises to more than -15 dB when you&apos;re not talking, your setup is not working, and you&apos;ll annoy other users with echoes.</source>
        <translation>Wyświetla moc ostatniej ramki (20 ms) po całym procesie przetwarzania. W najlepszym wypadku, powinna wynosić -96dB kiedy nic nie mówisz. W rzeczywistości powinna być to wartość zbliżona do -60 dB, ale od czasu do czasu powinieneś widzieć -20 dB. Kiedy mówisz, wartość powinna wzrosnąć do około -5 dB czy -10 dB.&lt;br /&gt; Jeżeli używaszi usuwania echa, a wartość wzrasta powyżej -15 dB gdy nic nie mówisz,oznacza to że twoje ustawienia są złe i będziesz przeszkadzać innym użytkownikiem echem dobiegającym z twojej transmisji.</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="137"/>
        <source>Speech Probability</source>
        <translation>Prawdopodobieństwo mowy</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="75"/>
        <source>Peak power in last frame</source>
        <translation>Maksymalna moc w ostatnij ramce</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="58"/>
        <source>This shows the peak power of the speakers in the last frame (20 ms). Unless you are using a multi-channel sampling method (such as ASIO) with speaker channels configured, this will be 0. If you have such a setup configured, and this still shows 0 while you&apos;re playing audio from other programs, your setup is not working.</source>
        <translation>Wyświetla maksymalną moc głośników w ostatniej ramce (20 ms). Jeżeli używasz wielokanałowej metody próbkowania (np. ASIO) ze skonfigurowanymi kanałami, wartość będzie wynosiła 0. Jeżeli posiadasz taką konfigurację, a nadal wartość wynosi 0, gdy odtwarzasz dźwięk z innych programów oznacza to, że twoje ustawienie nie działa prawidłowo.</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="104"/>
        <source>How close the current input level is to ideal</source>
        <translation>Jak bardzo obecny poziom głośności jest bliski idealnemu</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="124"/>
        <source>Signal-To-Noise ratio from the microphone</source>
        <translation>Stosunku Sygnału-Do-Szumu (SNR) z mikrofonu</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="127"/>
        <source>This is the Signal-To-Noise Ratio (SNR) of the microphone in the last frame (20 ms). It shows how much clearer the voice is compared to the noise.&lt;br /&gt;If this value is below 1.0, there&apos;s more noise than voice in the signal, and so quality is reduced.&lt;br /&gt;There is no upper limit to this value, but don&apos;t expect to see much above 40-50 without a sound studio.</source>
        <translation>Stosunku Sygnału-Do-Szumu (SNR) mikrofonu w ostatniej ramce (20 ms). Wyświetla o ile czystszy jest głos w porównaniu do szumu.&lt;br /&gt;Jeżeli wartość wynosi mniej niż 1.0, oznacza to więcej szumu niż głosu w sygnale, .Nie ma limitu tej wartości, ale nie spodziewaj się, że zobaczysz wartość większą niż 40-50 bez studia dźwiękowego.</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="144"/>
        <source>Probability of speech</source>
        <translation>Prawdopodobieństwo mowy</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="147"/>
        <source>This is the probability that the last frame (20 ms) was speech and not environment noise.&lt;br /&gt;Voice activity transmission depends on this being right. The trick with this is that the middle of a sentence is always detected as speech; the problem is the pauses between words and the start of speech. It&apos;s hard to distinguish a sigh from a word starting with &apos;h&apos;.&lt;br /&gt;If this is in bold font, it means Mumble is currently transmitting (if you&apos;re connected).</source>
        <translation>Prawdopodobieństwo wykrycia mowy w ostatniej ramce (20 ms)&lt;br /&gt;Zależy od tego aktywacja transmisju głosu. Problem polega na tym, że środek zdania zawsze będzie wyrykwany jako mowa; pozostaje problem pauz pomiędzy wyrazami oraz początkiem mowy. Trudno jest rozróżnić westchnięcie od wyrazu zaczynającego się na &apos;h&apos;.&lt;br /&gt;Jeżeli występuje tu pogrubiona czcionka, oznacza to że Mumble w danej chwili transmituje głos (gdy jesteś połączony).</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="181"/>
        <source>Bitrate of last frame</source>
        <translation>Bitrate ostatniej ramki</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="184"/>
        <source>This is the audio bitrate of the last compressed frame (20 ms), and as such will jump up and down as the VBR adjusts the quality. To adjust the peak bitrate, adjust &lt;b&gt;Compression Complexity&lt;/b&gt; in the Settings dialog.</source>
        <translation>Bitrate dźwięku w ostatniej ramce (20 ms), będzie skakać od góry do dołu kiedy VBR będzie dostosowywać jakość. Aby zmeinić bitrate, zmień &lt;b&gt;kompresję&lt;/b&gt; w Konfiguracji.</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="207"/>
        <source>Time between last two Push-To-Talk presses</source>
        <translation>Czas pomiędzy dwoma ostatnimi wciśnięciami PTT</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="262"/>
        <source>Power spectrum of input signal and noise estimate</source>
        <translation>Szacowana siła spektrum wejściowego sygnału oraz szumu</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="265"/>
        <source>This shows the power spectrum of the current input signal (red line) and the current noise estimate (filled blue).&lt;br /&gt;All amplitudes are multiplied by 30 to show the interesting parts (how much more signal than noise is present in each waveband).&lt;br /&gt;This is probably only of interest if you&apos;re trying to fine-tune noise conditions on your microphone. Under good conditions, there should be just a tiny flutter of blue at the bottom. If the blue is more than halfway up on the graph, you have a seriously noisy environment.</source>
        <translation>Wyświetla spektrum obecnej siły wejścia (czerwona linia) oraz obecny, szacowany szum (niebieskie wypełnienie).&lt;br /&gt;Wszystkie amplitudy są mnożone przez 30, aby pokazać interesujące części (jak bardzo sygnał prezentuje się na każdym kanale w przeciwieństwie do szumu).&lt;br /&gt;Prawdopodobnie  będzie cię to interesować tylko gdy próbujesz ustawić mikrofon do warunków zewnętrznych. Jednakże przy dobrych warunkach, w dolnej części wykresu powinno być widoczne słabe trzepotanie koloru niebieskiego. Jeżeli kolor ten zajmuje połowę wykresu, to masz bardzo hałaśliwy szum dochodzący z otoczenia.</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="293"/>
        <source>Weights of the echo canceller</source>
        <translation>Siła usuwania echa</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="296"/>
        <source>This shows the weights of the echo canceller, with time increasing downwards and frequency increasing to the right.&lt;br /&gt;Ideally, this should be black, indicating no echo exists at all. More commonly, you&apos;ll have one or more horizontal stripes of bluish color representing time delayed echo. You should be able to see the weights updated in real time.&lt;br /&gt;Please note that as long as you have nothing to echo off, you won&apos;t see much useful data here. Play some music and things should stabilize. &lt;br /&gt;You can choose to view the real or imaginary parts of the frequency-domain weights, or alternately the computed modulus and phase. The most useful of these will likely be modulus, which is the amplitude of the echo, and shows you how much of the outgoing signal is being removed at that time step. The other viewing modes are mostly useful to people who want to tune the echo cancellation algorithms.&lt;br /&gt;Please note: If the entire image fluctuates massively while in modulus mode, the echo canceller fails to find any correlation whatsoever between the two input sources (speakers and microphone). Either you have a very long delay on the echo, or one of the input sources is configured wrong.</source>
        <translation>Wyświetla siłę usuwania echa, gdzie czas to krzywa, która opada w dół oraz częstotliwość to krzywa zwiększająca się kurwa prawej stronie.&lt;br /&gt;Najlepiej byłoby, gdydby pole to pozostało czarne, co wskazywałoby że echo nie występuje. Zazwyczaj, będziesz mieć do czynienia z jedną lub kilkoma poziomymi paskami niebieskawego koloru, które reprezentują opóźnienie echa w czasie. Powinieneś widzieć siłę uaktualnianą w czasie rzeczywistym. &lt;br /&gt;Zauważ, że jeżeli nie masz żadnego echa nie zobaczysz tutaj nic co mogłoby ci się przydać. Posłuchaj muzyki i wszystko powinno się ustablizować.&lt;br /&gt;Możesz wybrać co chcesz przeglądać - prawdziwe lub wyimaginowane części częstotliwości domain siły lub obliczone modulacje i fazy. Najużyteczniejszym z tych wszystkich będzie mudlacja, która jest amplitudą echa, pokazuje ile wychodzącego sygnału jest usuwane. Pozostałem tryby przeglądania są najużyteczniejsze dla ludzi, którzy chcą podrasować algorytmy usuwania echa. &lt;br /&gt;Zauważ, że: Jeżeli cały obraz fluktuuje po całości, gdy tryb modulacji jest włączony, usuwanie echa nie ma wtedy szans na odnalezienie korelacji pomiędzy dwoma źródłami wyjścia (głośniki i mikrofon). Albo masz zbyt długie opóźnienie na echu albo jedno ze źródeł wejścia jest źle skonfigurowane. (I tak nie wiecie o co chodzi? My też - tłumacze).</translation>
    </message>
    <message>
        <location filename="AudioStats.cpp" line="405"/>
        <source>&gt;1000 ms</source>
        <translation>&gt;1000ms</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="14"/>
        <source>Audio Statistics</source>
        <translation>Statystyki audio</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="22"/>
        <source>Input Levels</source>
        <translation>Poziomy wejścia</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="38"/>
        <source>This shows the peak power in the last frame (20 ms), and is the same measurement as you would usually find displayed as &quot;input power&quot;. Please disregard this and look at &lt;b&gt;Microphone power&lt;/b&gt; instead, which is much more steady and disregards outliers.</source>
        <translation>Wyświetla maksymalną moc z ostatniej ramki (20 ms), taką samą wartość powinieneś widzieć w &quot;mocy wejściowej&quot;. Możesz to zignorować i patrzeć na &lt;b&gt;Moc mikrofonu&lt;/b&gt; która jest znacznie bardziej stabilna i nie uwzględnia wartości odstających.</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="0"/>
        <source>TextLabel</source>
        <translation type="obsolete">Tekst</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="91"/>
        <source>Signal Analysis</source>
        <translation>Analiza sygnału</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="97"/>
        <source>Microphone power</source>
        <translation>Moc mikrofonu</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="107"/>
        <source>This shows how close your current input volume is to the ideal. To adjust your microphone level, open whatever program you use to adjust the recording volume, and look at the value here while talking.&lt;br /&gt;&lt;b&gt;Talk loud, as you would when you&apos;re upset over getting fragged by a noob.&lt;/b&gt;&lt;br /&gt;Adjust the volume until this value is close to 100%, but make sure it doesn&apos;t go above. If it does go above, you are likely to get clipping in parts of your speech, which will degrade sound quality.</source>
        <translation>Okresla jak bardzo aktualna głośność jest bliska ideałowi. By dostroić poziom mikrofonu otwórz jakikolwiek program do regulacji głośnści i sprawdzaj tutaj wartości podczas mowy.&lt;br /&gt;&lt;b&gt;Mów głośno, tak jak byś był zdenerwowany po śmierci od nooba.&lt;/b&gt;&lt;br /&gt;Dostrajaj głośność dopóki wartość nie będzie bliska 100%, jednocześnie upewniając się że jej nie przekroczy. Gdy wartość przekroczy jednak 100% twoje wypowiedzi mogą być przerywane, co obniży komfort rozmowy.</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="117"/>
        <source>Signal-To-Noise ratio</source>
        <translation>Stosunek Sygnału-Do-Szumu (SNR)</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="162"/>
        <source>Configuration feedback</source>
        <translation>Konfiguracja</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="168"/>
        <source>Current audio bitrate</source>
        <translation>Aktualny bitrate dźwięku</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="194"/>
        <source>DoublePush interval</source>
        <translation>Odstęp pomiędzy podwójnym kliknięciem</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="0"/>
        <source>Time between last two PushToTalk presses</source>
        <translation type="obsolete">Czas pomiędzy dwoma ostatnimi naciśnięciami klawisza do mówienia</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="217"/>
        <source>Speech Detection</source>
        <translation>Detakcja mowy</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="224"/>
        <source>Current speech detection chance</source>
        <translation>Aktualna szansa na wykrycie mowy</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="227"/>
        <source>&lt;b&gt;This shows the current speech detection settings.&lt;/b&gt;&lt;br /&gt;You can change the settings from the Settings dialog or from the Audio Wizard.</source>
        <translation>&lt;b&gt;Wyświetla obecy sposób detekcjii głosu.&lt;/b&gt;&lt;br /&gt;Możesz zmienić sposób detekcji w &lt;i&gt;Konfiguracji&lt;/i&gt; lub korzystając z &lt;i&gt;Kreatora ustawień dźwięku&lt;/i&gt;.</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="256"/>
        <source>Signal and noise power spectrum</source>
        <translation>Widmo siły sygnału oraz szumu</translation>
    </message>
    <message>
        <location filename="AudioStats.ui" line="281"/>
        <source>Echo Analysis</source>
        <translation>Analiza echa</translation>
    </message>
</context>
<context>
    <name>AudioWizard</name>
    <message>
        <location filename="AudioWizard.ui" line="14"/>
        <source>Audio Tuning Wizard</source>
        <translation>Kreator ustawień dźwięku</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="18"/>
        <source>Introduction</source>
        <translation>Wprowadzenie</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="21"/>
        <source>Welcome to the Mumble Audio Wizard</source>
        <translation>Witamy w kreatorze ustawień dźwięku Mumble</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>This is the audio tuning wizard for Mumble. This will help you correctly set the input levels of your sound card, and also set the correct parameters for sound processing in Mumble.</source>
        <translation type="obsolete">Dzięki temu kreatorowi poprawnie skonfigurujesz program Mumble!

</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Please be aware that as long as this wizard is active, audio will be looped locally to allow you to listen to it, and no audio will be sent to the server.</source>
        <translation type="obsolete">Podczas działania tego kreatora dźwięk nadawany jest tak abyś sam siebie słyszał - przy czym nikt inny na żadnym serwerze cię nie usłyszy.

Przejdź Dalej, aby rozpocząć konfigurację!</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="761"/>
        <source>Finished</source>
        <translation>Zakończono</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="764"/>
        <source>Enjoy using Mumble</source>
        <translation>Miłej zabawy z Mumble</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Congratulations. You should now be ready to enjoy a richer sound experience with Mumble.</source>
        <translation type="obsolete">Gratulujemy! Od teraz powinieneś cieszyć się lepszą jakością dźwięku z Mumble.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="56"/>
        <source>Device selection</source>
        <translation>Wybór urządzenia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="59"/>
        <source>Selecting the input and output device to use with Mumble.</source>
        <translation>Wybierz urządzenia wejścia oraz wyjścia, z których Mumble będzie korzystać.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Input device</source>
        <translation type="obsolete">Urządzenie wejścia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="27"/>
        <source>&lt;p&gt;
This is the audio tuning wizard for Mumble. This will help you correctly set the input levels of your sound card, and also set the correct parameters for sound processing in Mumble.
&lt;/p&gt;
&lt;p&gt;
Please be aware that as long as this wizard is active, audio will be looped locally to allow you to listen to it, and no audio will be sent to the server.
&lt;/p&gt;</source>
        <translation>&lt;p&gt;Jest to kreator ustawień dźwięku Mumble. Kreator pomoże ci w odpowiednim skonfigurowaniu twojej karty dźwiękowej, oraz w doborze odpowiednich ustawień przetwarzania dźwięku w Mumble.&lt;/p&gt;&lt;p&gt;Zwróć uwagę na to, że podczas kolejnych kroków będziesz słyszeć sam siebie, ale nie martw się żaden z użytkowników cię nie usłyszy, gdy kreator jest otwarty.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="65"/>
        <source>Input Device</source>
        <translation>Urządzenie wejścia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="71"/>
        <source>This is the device your microphone is connected to.</source>
        <translation>Urządzenie, do którego podłączony jest mikrofon.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="153"/>
        <source>System</source>
        <translation>System</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="91"/>
        <source>Input method for audio</source>
        <translation>System wejścia audio</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="94"/>
        <source>&lt;b&gt;This is the input method to use for audio.&lt;/b&gt;&lt;br /&gt;Most likely you want to use DirectSound.</source>
        <translation>&lt;b&gt;Metoda wejścia dźwięku.&lt;/b&gt;&lt;br /&gt;Najprawdopodobniej chcesz korzystać z DirectSound.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="173"/>
        <source>Device</source>
        <translation>Urządzenie</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="111"/>
        <source>Input device to use</source>
        <translation>Urządzenie wejścia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="114"/>
        <source>&lt;b&gt;Selects which sound card to use for audio input.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Wskazuje, które urządzenie będzie użyte do wejścia dźwięku.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="121"/>
        <source>Cancel echo from headset or speakers</source>
        <translation>Usuwaj echo ze słuchawek lub głośników</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Output device</source>
        <translation type="obsolete">Urządzenie wyjścia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="143"/>
        <source>This is the device your speakers or headphones are connected to.</source>
        <translation>Urządzenie, do którego podłączone są słuchawki lub głośniki.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="163"/>
        <source>Output method for audio</source>
        <translation>System wyjścia audio</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="166"/>
        <source>&lt;b&gt;This is the Output method to use for audio.&lt;/b&gt;&lt;br /&gt;Most likely you want to use DirectSound.</source>
        <translation>&lt;b&gt;Metoda wyjścia dźwięku.&lt;/b&gt;&lt;br /&gt;Najprawdopodobniej chcesz korzystać z DirectSound.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="183"/>
        <source>Output device to use</source>
        <translation>Urządzenie wyjścia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="186"/>
        <source>&lt;b&gt;Selects which sound card to use for audio Output.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Wskazuje, które urządzenie będzie użyte do wyjścia dźwięku.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="193"/>
        <source>Allows positioning of sound</source>
        <translation>Zezwalaj na pozycjonowanie dźwięku</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="245"/>
        <source>&lt;p&gt;
To keep latency to an absolute minimum, it&apos;s important to buffer as little audio as possible on the soundcard. However, many soundcards report that they require a much smaller buffer than what they can actually work with, so the only way to set this value is to try and fail.
&lt;/p&gt;
&lt;p&gt;
You should hear a voice sample. Change the slider below to the lowest value which gives &lt;b&gt;no&lt;/b&gt; interruptions or jitter in the sound. Please note that local echo is disabled during this test.
&lt;/p&gt;
</source>
        <translation>&lt;p&gt;Aby utrzymać opóźnienie na minimalnym poziomie, ważnym jest aby buforować jak najmniejszą ilość danych na karcie dźwiękowej. Jednakże wiele kart może mieć problemy ze zbyt niskimi ustawieniami bufora, tak więc jedynym sposobem na ustawienie tej wartości jest metoda prób i błędów.&lt;/p&gt;&lt;p&gt;Powinieneś słyszeć próbkę głosową. Ustaw teraz wskaźnik na pasku poniżej do poziomu takiego, który &lt;b&gt;nie&lt;/b&gt; powoduje żadnych zakłóceń, trzeszczenia itd. Zauważ, że podczas tego kroku echo jest wyłączone.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="267"/>
        <source>Amount of data to buffer</source>
        <translation>Ilość danych przekazywanych do bufora</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="270"/>
        <source>This sets the amount of data to pre-buffer in the output buffer. Experiment with different values and set it to the lowest which doesn&apos;t cause rapid jitter in the sound.</source>
        <translation>Określa ilość danych, które są wstępnie wczytywane do bufora wyjścia. Poeksperymentuj z różnymi wartościami i ustaw je na najniższą, możliwą wartość która nie powoduje przycinania dźwięku.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="319"/>
        <source>Volume tuning</source>
        <translation>Regulacja głośności</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="322"/>
        <source>Tuning microphone hardware volume to optimal settings.</source>
        <translation>Ustawienie optymalnej głośności mikrofonu.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="682"/>
        <source>Keep custom Text-To-Speech settings.</source>
        <translation>Zachowaj własne ustawienia Tekstu-Na-Mowę.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="715"/>
        <source>&lt;p&gt;
Mumble supports positional audio for some games, and will position the voice of other users relative to their position in game. Depending on their position, the volume of the voice will be changed between the speakers to simulate the direction and distance the other user is at. Such positioning depends on your speaker configuration being correct in your operating system, so a test is done here.
&lt;/p&gt;
&lt;p&gt;
The graph below shows the position of &lt;font color=&quot;red&quot;&gt;you&lt;/font&gt;, the &lt;font color=&quot;yellow&quot;&gt;speakers&lt;/font&gt; and a &lt;font color=&quot;green&quot;&gt;moving sound source&lt;/font&gt; as if seen from above. You should hear the audio move between the channels.
&lt;/p&gt;
</source>
        <translation>&lt;p&gt;Mumble wspiera dźwięk pozycyjny w grach i będzie przetwarzać dźwięk zgodnie z pozycja danego gracza w grze. W zależności od zajmowanej pozycji głośność mowy twoich znajomych będzie ulegać zmianie, aby symulować różne kierunki czy pozycje w grze. Ustawienia te zależą od twoich głośników - tutaj możesz sprawdzić czy działają prawidłowo.&lt;/p&gt;&lt;p&gt;Wykres poniżej wskazuje pozycję &lt;font color=&quot;red&quot;&gt;twoją&lt;/font&gt;,&lt;font color=&quot;yellow&quot;&gt;głośników&lt;/font&gt;oraz&lt;font color=&quot;green&quot;&gt;poruszającego się źródła dźwięku&lt;/font&gt; widocznego jak gdyby z góry. Powinieneś słyszeć przemieszczający się dźwięk pomiędzy kanałami.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="731"/>
        <source>Use headphones instead of speakers</source>
        <translation>Używaj słuchawek zamiast głośników</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="770"/>
        <source>&lt;p&gt;
Congratulations. You should now be ready to enjoy a richer sound experience with Mumble.
&lt;/p&gt;
&lt;p&gt;
Mumble is under continuous development, and the development team wants to focus on the features that benefit the most users. To this end, Mumble supports submitting anonymous statistics about your configuration to the developers. These statistics are essential for future development, and also make sure the features you use aren&apos;t deprecated.
&lt;/p&gt;
</source>
        <translation>&lt;p&gt;
Gratulujemy. Teraz powinieneś być gotowy, aby w pełni cieszyć się bogatszym dźwiękiem dzięki Mumble.
&lt;/p&gt;
&lt;p&gt;
Mumble jest podczas ciągłego tworzenia a nasza drużyna chce skupić się na funkcjach, które sprzyjają jak największej ilości graczy. Mumble wspiera wysyłanie anonimowych statystyk oraz ustawień twojego klienta do twórców aplikacji. Dane te są potrzebne do dalszego rozwoju aplikacji oraz pokazują czy niektóre funkcje są w ogóle potrzebne.
&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Open your sound control panel and go to the recording settings. Make sure the microphone is selected as active input with maximum recording volume. If there&apos;s an option to enable a &quot;Microphone boost&quot; make sure it&apos;s checked.</source>
        <translation type="obsolete">Wejdź do panelu regulacji głośności Windows (Start&gt;Uruchom&gt;sndvol32) i upewnij się, że mikrofon jest wybrany jako urządzenie do przechwytywania dźwięku. Użyj opcji &quot;Mic Boost&quot; jeżeli jest dostępna.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Speak loudly, as when you are annoyed or excited. Decrease the volume in the sound control panel until the bar below stays as high as possible in the blue and green but &lt;b&gt;not&lt;/b&gt; the red zone while you speak.</source>
        <translation type="obsolete">Mów głośno, tak jakbyś był podekscytowany albo wkurzony. Zmniejszaj stopniowo głośność w panelu aż pasek poniżej zostanie tak wysoko jak to możliwe w niebiesko-zielonym kolorze (nie może być w czerwonym).</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="354"/>
        <source>Now talk softly, as you would when talking late at night and you don&apos;t want to disturb anyone. Adjust the slider below so that the bar moves into green when you talk, but stays blue while you&apos;re silent.</source>
        <translation>Teraz mów łagodnie tak jakbyś mówił późno w nocy, aby nikogo nie obudzić. Ustaw suwak w taki sposób aby poziom dźwięku znajdował się na zielonym polu gdy mówisz oraz pozostawał w niebieskim gdy milczysz.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="421"/>
        <source>Voice Activity Detection</source>
        <translation>Wybór sposobu aktywacji głosowej</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="424"/>
        <source>Letting Mumble figure out when you&apos;re talking and when you&apos;re silent.</source>
        <translation>Teraz pozwól Mumble ustalić, kiedy mówisz a kiedy milczysz.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="430"/>
        <source>This will help Mumble figure out when you are talking. The first step is selecting which data value to use.</source>
        <translation>Wybierz sposób aktywacji głosowej, którego chcesz używać.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="474"/>
        <source>Raw amplitude from input</source>
        <translation>Detekcja na podstawie Amplitudy</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="467"/>
        <source>Signal-To-Noise ratio</source>
        <translation>Detekcja na podstawie stosunku Sygnału-Do-Szumu (SNR)</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Next you need to adjust the following two sliders. The first few utterances you say should end up in the green area (definitive speech). While talking, you should stay inside the yellow (might be speech) and when you&apos;re not talking, everything should be in the red (definitively not speech).</source>
        <translation type="obsolete">Następnie musisz ustawić podane wskaźniki.
Zielony - mowa zdecydowana, żółty - mowa normalna, czerwony - gdy nic nie mówisz.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Last, you need to adjust the grace time. Mumble may detect this much non-speech and still keep transmitting before it breaks off. This allows you to catch your breath while speaking.</source>
        <translation type="obsolete">Ostatecznie ustaw jak długo Mumble podtrzymuje transmisję po zakończeniu wypowiedzi.
W ten sposób możesz uniknąć ucinania głosu pomiędzy wypowiadanymi zdaniami.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="236"/>
        <source>Device tuning</source>
        <translation>Ustawianie urządzenia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="239"/>
        <source>Changing hardware output delays to their minimum value.</source>
        <translation>Zmiana opóźnień sprzętu do minimalnych wartości.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>To keep latency to an absolute minium, it&apos;s important to buffer as little audio as possible on the soundcard. However, many soundcards report that they require a much smaller buffer than what they can actually work with, so the only way to set this value is to try and fail.</source>
        <translation type="obsolete">Aby opóźnienia były najmniejsze bufor powinien być jak najmniejszy, wówczas karta dźwiękowa szybciej wysyła dźwięk.
Niektóre karty dźwiękowe mają granice co do ustawień bufora, raz działają a raz nie.
Postaraj się ustawić wielkość bufora tak, aby nie występowały żadne zakłócenia w odtwarzanym dźwięku.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Amount of data to buffer.</source>
        <translation type="obsolete">Ilość danych do trafiających do bufora</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>This sets the amount of data to prebuffer in the output buffer. Experiment with different values and set it to the lowest which doesn&apos;t cause rapid jitter in the sound.</source>
        <translation type="obsolete">Ustaw jak najniżej możliwą wartość (UWAGA! Twoja karta dźwiękowa może nie działać na bardzo niskich wartościach).</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>%1ms</source>
        <translation type="obsolete">%1ms</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>%1 s</source>
        <translation type="obsolete">%1 s</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>You should hear a single tone that&apos;s changing in frequency. Change the slider below to the lowest value which gives &lt;b&gt;no&lt;/b&gt; interruptions or jitter in the sound. Please note that local echo is disabled during this test to improve audio path recognition.</source>
        <translation type="obsolete">Powinieneś usłyszeć jeden dźwięk który ciągle zmienia częstotliwość. Zmień suwakiem wartość do najmniejszej a jednocześnie do takiej przy, której nie występują wahania dźwięku. Echo podczas tego testu jest wyłączone.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>If you position the microphone so it can pick up the speakers or headset, Mumble will measure the total audio path delay in your system; this means the delay from a sample is placed in an outbound buffer until it&apos;s found in a matching incoming buffer.</source>
        <translation type="obsolete">Jeśli ustawisz swój mikrofon tak, aby przechwytywał dźwięk z głośników lub słuchawek to Mumble automatycznie ustawi opóźnienia audio tak, aby inni użytkownicy nie słyszeli dźwięków otoczenia (np. pisania na klawiaturze, oddechu).</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Audio path is %1ms long.</source>
        <translation type="obsolete">Ścieżka dźwiękowa ma długość %1ms</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Audio path cannot be determined. Input not recognized.</source>
        <translation type="obsolete">Ścieżka dźwiękowa nie może być określona.
Wejście dźwieku nie zostało rozpoznane!</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="127"/>
        <source>Use echo cancellation</source>
        <translation>Usuwanie akustycznego echa</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Cancel echo from headset or speakers.</source>
        <translation type="obsolete">Ta opcja usuwa echo ze słuchawek lub głośników.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="124"/>
        <source>This enables echo cancellation of outgoing audio, which helps both on speakers and on headsets.</source>
        <translation>Uaktywnia usuwanie echa pochodzącego z urządzeń (głośniki lub słuchawki).</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="137"/>
        <source>Output Device</source>
        <translation>Urządzenie wyjścia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="199"/>
        <source>Enable positional audio</source>
        <translation>Włącz dźwięk pozycyjny</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Allows positioning of sound.</source>
        <translation type="obsolete">Uaktywnia pozycjonowanie dźwięku.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="196"/>
        <source>This allows Mumble to use positional audio to place voices.</source>
        <translation>Pozwala to Mumble na używanie pozycjonowania dźwięku aby umieszczać głos zgodnie z pozycja danego użytkownika w grze.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="328"/>
        <source>&lt;p&gt;
Open your sound control panel and go to the recording settings. Make sure the microphone is selected as active input with maximum recording volume. If there&apos;s an option to enable a &quot;Microphone boost&quot; make sure it&apos;s checked.
&lt;/p&gt;
&lt;p&gt;
Speak loudly, as when you are annoyed or excited. Decrease the volume in the sound control panel until the bar below stays as high as possible in the blue and green but &lt;b&gt;not&lt;/b&gt; the red zone while you speak.
&lt;/p&gt;
</source>
        <translation>&lt;p&gt;Otwórz swój systemowy panel konfiguracji dźwięku a następnie zajrzyj do zakładki ustawień nagrywania. Upewnij się, że mikrofon jest aktywny i ustawiony na maksymalną głośność nagrywania. Jeżeli istnieje opcja MicBoost czy wzmocnienie dźwięku upewnij się, że jest aktywna.&lt;/p&gt;&lt;p&gt;Mów głośno, tak jakbyś był wkurzony lub podekscytowany. Zmniejsz głośność dźwięku w systemowym panelu sterowania do tego momentu aż pasek znajdzie się mniej więcej w niebieskiej lub zielonej części paska ale &lt;b&gt;nie dopuść&lt;/b&gt; żeby świeciła się czerwona część paska.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="497"/>
        <source>Next you need to adjust the following slider. The first few utterances you say should end up in the green area (definitive speech). While talking, you should stay inside the yellow (might be speech) and when you&apos;re not talking, everything should be in the red (definitively not speech).</source>
        <translation>Nastepnie musisz ustawić ten suwak. Generalnie podczas mowy wygląda to tak, że zdecydowana mowa to obszar zielony, zwyczajna mowa to obszar żółty. Wszystko inne znajdujące się w obszarze czerwonym, to po prostu brak mowy.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="706"/>
        <source>Positional Audio</source>
        <translation>Dźwięk pozycyjny</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="709"/>
        <source>Adjusting attenuation of positional audio.</source>
        <translation>Regulacja tłumienia dźwięku pozycyjnego.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Mumble supports positional audio for some games, and will position the voice of other players relative to their position in game. Depending on their position, the volume of the voice will be changed between the speakers to simulate the direction and distance the other player is at. Such positioning depends on your speaker configuration being correct in your operating system, so a test is done here.</source>
        <translation type="obsolete">Mumble wspiera dźwięk pozycyjny w kilku grach.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>The graph below shows the position of &lt;font color=&quot;red&quot;&gt;you&lt;/font&gt;, the &lt;font color=&quot;yellow&quot;&gt;speakers&lt;/font&gt; and a &lt;font color=&quot;green&quot;&gt;moving sound source&lt;/font&gt; as if seen from above. You should hear the audio move between the channels.</source>
        <translation type="obsolete">Wykres poniżej pokazuje &lt;font color=&quot;red&quot;&gt;ciebie&lt;/font&gt;, &lt;font color=&quot;yellow&quot;&gt;głośniki&lt;/font&gt; oraz &lt;font color=&quot;green&quot;&gt;poruszające źródło dźwięku&lt;/font&gt;.
Powinieneś usłyszeć dźwięk przemieszczający się pomiędzy głośnikami.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="737"/>
        <source>Use headphones</source>
        <translation>Używam słuchawek</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Use headphones instead of speakers.</source>
        <translation type="obsolete">Używaj słuchawek zamiast głośników.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="734"/>
        <source>This ignores the OS speaker configuration and configures the positioning for headphones instead.</source>
        <translation>Ignoruje ustawienia w systemie dotyczące głośników i wymuszasz konfigurację dźwięku pozycyjnego dla słuchawek.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="0"/>
        <source>Mumble is under continuous development, and the development team wants to focus on the features that benefit the most users. To this end, Mumble supports submitting anonymous statistics about your configuration to the developers. These statistcs are essential for future development, and also make sure the features you use aren&apos;t deprecated.</source>
        <translation type="obsolete">Adnotacja twórców:
Mumble jest ciągle rozwijany, naszym priorytetem jest skupianie się na cechach najbardziej pożądanych przez użytkowników, dlatego dodaliśmy do programu opcję wysyłania anonimowych statystyk.
Dane te zawierają konfigurację twojego klienta i są nam bardzo potrzebne do przyszłego rozwoju aplikacji.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="786"/>
        <source>Submit anonymous statistics to the Mumble project</source>
        <translation>Przekazuj anonimowe statystyki do twórców Mumble</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="442"/>
        <source>Push To Talk:</source>
        <translation>Aktywacja przyciskiem:</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="206"/>
        <source>Enables attenuation of other applications while users talk to you</source>
        <translation>Włącza tłumienie innych aplikacji gdy inni użytkownicy mówią</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="209"/>
        <source>Enables attenuation of other applications while users talk to you. This means that as soon someone starts to speak to you in Mumble, the sound of all other applications (like audio players) will get attenuated so you can hear them more clearly.</source>
        <translation>Włącza tłumienie innych aplikacji gdy inni użytkownicy mówią. Oznacza to że gdy tylko ktoś zacznie do ciebie mówić, dźwięk z innych aplikacji (takich jak np. WinAmp, Foobar2000) zostanie stłumiony, abyś mógł lepiej słyszeć jego wypowiedź.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="212"/>
        <source>Attenuate applications while other users talk</source>
        <translation>Tłumienie aplikacji podczas mowy innych użytkowników</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="408"/>
        <source>Apply some high contrast optimizations for visually impaired users</source>
        <translation>Zastosuj optymalizacje wysokiego kontrastu dla osób niedowidzących</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="411"/>
        <source>Use high contrast graphics</source>
        <translation>Użyj grafiki o wysokim kontraście</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="543"/>
        <source>Quality &amp; Notifications</source>
        <translation>Jakość &amp; Powiadomienia</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="546"/>
        <source>Adjust quality and notification settings.</source>
        <translation>Regulacja jakośćci oraz konfiguracja powiadomień.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="558"/>
        <source>Quality settings</source>
        <translation>Ustawienia jakości</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="576"/>
        <source>Low</source>
        <translation>Niska</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="583"/>
        <source>In this configuration Mumble will use a &lt;b&gt;low amount of bandwidth&lt;/b&gt;. This will inevitably result in high latency and poor quality. Choose this only if your connection cannot handle the other settings. (Speex 16kbit/s, 60ms per packet)</source>
        <translation>Mumble będzie używać konfiguracji dla łącza o &lt;b&gt;niskiej przepustowości&lt;/b&gt;. Będzie to skutkować wysokimi opóźnieniami oraz bardzo słabą jakością. Wybieraj ją tylko wtedy gdy twoje połączenie nie jest wstanie obsłużyć innych ustawień. (Speex 16kbit/s, pakiet co 60ms)</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="599"/>
        <source>Balanced</source>
        <translation>Zrównoważona</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="609"/>
        <source>This is the &lt;b&gt;recommended default&lt;/b&gt; configuration. It provides a good balance between quality, latency, and bandwidth usage. (CELT 40kbit/s, 20ms per packet)</source>
        <translation>&lt;b&gt;Zalecana standardowa&lt;/b&gt; konfiguracja. Dostarcza odpowiednie zbalansowanie pomiędzy jakościa, opóźnieniem a wykorzystywaniem przepustowości (CELT 40kbit/s, pakiet co 20ms)</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="625"/>
        <source>High</source>
        <translation>Wysoka</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="632"/>
        <source>This configuration is only recommended for use in setups where bandwidth is not an issue, like a LAN. It provides the lowest latency supported by Mumble and &lt;b&gt;high quality&lt;/b&gt;. (CELT 72kbit/s, 10ms per packet)</source>
        <translation>Ta konfiguracja jest zalecana tylko tam gdzie przepustowość nie jest problemem (np. sieci LAN). Dostarcza najniższe opóźnienie obsługiwane przez Mumble oraz &lt;b&gt;najwyższa jakość dźwięku&lt;/b&gt; (CELT 72kbit/s, pakiet co 10ms)</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="642"/>
        <source>Custom</source>
        <translation>Użytkownika</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="649"/>
        <source>You already set a customized quality configuration in Mumble. Select this setting to keep it.</source>
        <translation>Posiadasz już własne ustawienia jakości w Mumble. Wybierz tą opcję by je zachować.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="659"/>
        <source>Notification settings</source>
        <translation>Ustawienia powiadomień</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="665"/>
        <source>Use Text-To-Speech to read notifications and messages to you.</source>
        <translation>Używaj funkcji Tekst-Na-Mowę do odczytywania powiadomień oraz wiadomości tekstowych.</translation>
    </message>
    <message>
        <location filename="AudioWizard.ui" line="675"/>
        <source>Disable Text-To-Speech and use sounds instead.</source>
        <translation>Wyłącz funkcję Tekst-Na-Mowę i zamiast tego używaj powiadomień dźwiękowych.</translation>
    </message>
    <message>
        <location filename="AudioWizard.cpp" line="304"/>
        <source>%1 ms</source>
        <translation>%1 ms</translation>
    </message>
</context>
<context>
    <name>BanEditor</name>
    <message>
        <location filename="BanEditor.ui" line="72"/>
        <source>Reason</source>
        <translation>Powód</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="92"/>
        <source>Start</source>
        <translation>Od</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="99"/>
        <source>End</source>
        <translation>Do</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="113"/>
        <source>User</source>
        <translation>Użytkownik</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="127"/>
        <source>Hash</source>
        <translation>Wartość</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="145"/>
        <source>&amp;Add</source>
        <translation>&amp;Dodaj</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="152"/>
        <source>&amp;Update</source>
        <translation>&amp;Aktualizuj</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="159"/>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="14"/>
        <source>Mumble - Edit Bans</source>
        <translation>Mumble - edycja banów</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="0"/>
        <source>0.0.0.0</source>
        <translation type="obsolete">0.0.0.0</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="29"/>
        <source>&amp;Address</source>
        <translation>&amp;Adres IP</translation>
    </message>
    <message>
        <location filename="BanEditor.ui" line="39"/>
        <source>&amp;Mask</source>
        <translation>&amp;Maska</translation>
    </message>
</context>
<context>
    <name>CertView</name>
    <message>
        <location filename="Cert.cpp" line="50"/>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="57"/>
        <source>Email</source>
        <translation>Email</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="64"/>
        <source>Issuer</source>
        <translation>Wystawił</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="71"/>
        <source>Expiry Date</source>
        <translation>Data wygaśnięcia</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="105"/>
        <source>(none)</source>
        <translation>(brak)</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="116"/>
        <source>Self-signed</source>
        <translation>Własnoręcznie podpisany</translation>
    </message>
</context>
<context>
    <name>CertWizard</name>
    <message>
        <location filename="Cert.cpp" line="206"/>
        <source>Resolving domain %1.</source>
        <translation>Rozwijanie nazwy domeny %1.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="212"/>
        <source>Unable to validate email.&lt;br /&gt;Enter a valid (or blank) email to continue.</source>
        <translation>Nie można potwierdzić adresu email.&lt;br /&gt;Podaj właściwy (lub żadnego) adres email, aby kontynuować.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="220"/>
        <source>There was an error generating your certificate.&lt;br /&gt;Please try again.</source>
        <translation>Wystąpił błąd podczas generowania twojego certyfikatu.&lt;br /&gt;Prosimy spróbować później.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="228"/>
        <source>Your certificate and key could not be exported to PKCS#12 format. There might be an error in your certificate.</source>
        <translation>Twój certyfikat oraz klucz nie mogły zostać wyeksportowane do formatu PKCS#12. W twoim certyfikacie może występować błąd.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="233"/>
        <source>The file could not be opened for writing. Please use another file.</source>
        <translation>Plik nie mógł zostać otwarty w celu zapisania. Prosimy użyć innego pliku.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="239"/>
        <source>The file could not be written successfully. Please use another file.</source>
        <translation>Plik nie mógł zostać zapisany. Prosimy użyć innego pliku.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="246"/>
        <source>The file could not be opened for reading. Please use another file.</source>
        <translation>Plik nie mógł zostać otwarty w celu odczytania jego zawartości. Prosimy użyć innego pliku.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="252"/>
        <source>The file is empty or could not be read. Please use another file.</source>
        <translation>Plik jest pusty lub uszkodzony. Prosimy użyć innego pliku.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="257"/>
        <source>The file did not contain a valid certificate and key. Please use another file.</source>
        <translation>Plik nie zawierał poprawnego certyfikatu i klucza. Prosimy użyć innego pliku.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="279"/>
        <source>Select file to export certificate to</source>
        <translation>Wybierz plik, do którego zostanie wyeksportowany certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="316"/>
        <source>Select file to import certificate from</source>
        <translation>Wybierz plik, z którego importować certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="373"/>
        <source>Unable to resolve domain.</source>
        <translation>Nie udało się odczytać domeny.</translation>
    </message>
    <message>
        <location filename="Cert.cpp" line="416"/>
        <source>Mumble User</source>
        <translation>Użytkownik Mumble</translation>
    </message>
    <message>
        <location filename="main.cpp" line="409"/>
        <source>&lt;b&gt;Certificate Expiry:&lt;/b&gt; Your certificate is about to expire. You need to renew it, or you will no longer be able to connect to servers you are registered on.</source>
        <translation>&lt;b&gt;Wygaśnięcie certyfikatu:&lt;/b&gt;Twój certyfikat niedługo straci ważność. Musisz go odnowić, jeżeli tego nie zrobisz nie będziesz w stanie połączyć się z serwerami, na których jesteś zarejestrowany.</translation>
    </message>
</context>
<context>
    <name>Certificates</name>
    <message>
        <location filename="Cert.ui" line="14"/>
        <source>Certificate Management</source>
        <translation>Zarządzanie certyfikatami</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="18"/>
        <source>Certificate Authentication</source>
        <translation>Autoryzacja certyfikatami</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="21"/>
        <source>Authenticating to servers without using passwords</source>
        <translation>Autoryzacja na serwerach bez użycia haseł</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>&lt;p&gt;Mumble can use certificates to authenticate with servers. Using certificates avoids passwords, meaning you don&apos;t need to disclose any password to the remote site. It also enables very easy user registration.&lt;/p&gt;&lt;p&gt;While Mumble can work without certificates, the majority of servers will expect you to have one.&lt;/p&gt;</source>
        <translation type="obsolete">&lt;p&gt;Mumble może wykorzystywać certyfikaty do autoryzacji na serwerach. Używanie certyfikatu to przede wszystkim brak haseł, oznacza to że nie musisz ujawniać hasła na stronach którym nie ufasz. Pozwala również na bardzo łatwą rejestracje na jakimkolwiek serwerze.&lt;/p&gt;&lt;p&gt;Mumble może pracować bez certyfikatów ale licz się z tym, że większość serwerów będzie ich wymagać.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="369"/>
        <source>Current certificate</source>
        <translation>Obecny certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="47"/>
        <source>This is the certificate Mumble currently uses.</source>
        <translation>To jest certyfikat, którego Mumble używa obecnie.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="288"/>
        <source>Current Certificate</source>
        <translation>Obecny certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="80"/>
        <source>Create a new certificate</source>
        <translation>Utwórz nowy certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="77"/>
        <source>This will create a new certificate.</source>
        <translation>Tworzy nowy certyfikat.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="100"/>
        <source>Import certificate from file</source>
        <translation>Importuj certyfikat z pliku</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="103"/>
        <source>This will import a certificate from file.</source>
        <translation>Importuje certyfikat z pliku.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="106"/>
        <source>Import a certificate</source>
        <translation>Importuj certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="315"/>
        <source>Export Certificate</source>
        <translation>Eksportuj certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="129"/>
        <source>This will export a certificate to file.</source>
        <translation>Eksportuje certyfikat do pliku.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="132"/>
        <source>Export current certificate</source>
        <translation>Eksportuj obecny certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="150"/>
        <source>Import Certificate</source>
        <translation>Importuj certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="153"/>
        <source>PKCS #12 Certificate import</source>
        <translation>Import certyfikatu PKCS #12</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="162"/>
        <source>&lt;p&gt;Mumble can import certificates stored in PKCS #12 format. This is the format used when exporting a key from Mumble, and also when exporting keys from Firefox, Internet Explorer, Opera etc.&lt;/p&gt;&lt;p&gt;If the file is password protected, you will need the password to import the certificate.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Mumble może importować certyfikaty w formacie PKCS #12. Jest to format używany podczas eksportu certyfikatu w Mumble, oraz innych aplikacjach takich jak Opera, Internet Explorer czy Firefox.&lt;/p&gt;&lt;p&gt;Jeżeli plik jest zabezpieczony hasłem, będziesz musiał je podać, aby zaimportować certyfikat.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="172"/>
        <source>Import from</source>
        <translation>Importuj z</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="182"/>
        <source>Filename to import from</source>
        <translation>Nazwa pliku do importu</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="185"/>
        <source>This is the filename you wish to import a certificate from.</source>
        <translation>To jest nazwa pliku, z którego chcesz importować certyfikat.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="192"/>
        <source>Select file to import from</source>
        <translation>Wybierz plik, z którego chcesz importować</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="195"/>
        <source>This opens a file selection dialog to choose a file to import a certificate from.</source>
        <translation>Otwiera okno wyboru plików w celu importowania certyfikatu.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="198"/>
        <source>Open...</source>
        <translation>Otwórz...</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="209"/>
        <source>Password</source>
        <translation>Hasło</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="219"/>
        <source>Password for PKCS#12 file</source>
        <translation>Hasło dla pliku PKCS #12</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="222"/>
        <source>This is the password for the PKCS#12 file containing your certificate.</source>
        <translation>To jest hasło dla pliku PKCS #12, który zawiera twój certyfikat.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="229"/>
        <source>Certificate to import</source>
        <translation>Certyfikat do zaimportowania</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="232"/>
        <source>This is the certificate you are importing.</source>
        <translation>To jest certyfikat, który importujesz.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="375"/>
        <source>Certificate Details</source>
        <translation>Szczegóły certyfikatu</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="243"/>
        <source>Replace Certificate</source>
        <translation>Zastąp certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="246"/>
        <source>Replace existing certificate with new certificate?</source>
        <translation>Zastąpić istniejący certyfikat nowym?</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="258"/>
        <source>&lt;p&gt;You already have a certificate stored in Mumble, and you are about to replace it.&lt;/p&gt;
&lt;p&gt;If you are upgrading to a certificate issued to you by a trusted CA and the email addresses match your current certificate, this is completely safe, and servers you connect to will automatically recognize the strong certificate for your email address.
&lt;/p&gt;
&lt;p&gt;If this is not the case, you will no longer be recognized by any server you previously have authenticated with. If you haven&apos;t been registered on any server yet, this is nothing to worry about.
&lt;/p&gt;
&lt;p&gt;
Are you sure you wish to replace your certificate?
&lt;/p&gt;
</source>
        <translation>&lt;p&gt;Uwaga masz już zachowany certyfikat w Mumble i masz zamiar go zastąpić.&lt;/p&gt;&lt;p&gt;Jeżeli uaktualniasz swój certyfikat i użyty w nim e-mail zgadza się z obecnym wówczas jest to bezpieczne i serwery, do których zazwyczaj się łączysz rozpoznają cię automatycznie tak jak ze starym certyfikatem.&lt;/p&gt;&lt;p&gt;Jeżeli nie, to niestety nie będziesz rozpoznawany na tych serwerach jako ta sama osoba. Jeżeli nie wchodziłeś nigdy na żaden serwer zignoruj ten komunikat.&lt;/p&gt;&lt;p&gt;Jesteś pewien, że chcesz zastąpić swój bieżący certyfikat?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="285"/>
        <source>This is the certificate Mumble currently uses. It will be replaced.</source>
        <translation>To jest certyfikat, którego Mumble obecnie używa. Zostanie on zastąpiony innym.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="301"/>
        <source>New certificate</source>
        <translation>Nowy certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="304"/>
        <source>This is the new certificate that will replace the old one.</source>
        <translation>To jest nowy certyfikat, który zastąpi stary.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="383"/>
        <source>New Certificate</source>
        <translation>Nowy certyfikat</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="318"/>
        <source>Make a backup of your certificate</source>
        <translation>Stwórz kopię swojego certyfikatu</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="327"/>
        <source>&lt;p&gt;If you ever lose your current certificate, which will happen if your computer suffers a hardware failure or you reinstall your machine, you will no longer be able to authenticate to any server you are registered on. It is therefore &lt;b&gt;mandatory&lt;/b&gt; that you make a backup of your certificate. We strongly recommend you store this backup on removable storage, such as an USB memory stick.&lt;/p&gt;
&lt;p&gt;Note that this file will not be encrypted, and if anyone gains access to it, they will be able to impersonate you, so take good care of it.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Jeżeli kiedykolwiek zgubisz swój certyfikat, twój sprzęt się spali, przeinstalujesz swój system lub z jakiegokolwiek innego powodu stracisz plik to nie będziesz mógł wejść na serwery, na których byłeś zarejestrowany. Tak więc pamiętaj, że utworzenie kopii zapasowej to &lt;b&gt;konieczność&lt;/b&gt; - użyj do tego na przykład dysku przenośnego.&lt;/p&gt;&lt;p&gt;Pamiętaj również, że ten plik nie jest w żaden sposób szyfrowany i jeżeli osoba nieautoryzowana uzyska do niego dostęp to będzie w stanie podszywać się pod ciebie. Także prosimy, dbaj o swoje kopie zapasowe!&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="338"/>
        <source>Export to</source>
        <translation>Eksportuj do</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="348"/>
        <source>Filename to export to</source>
        <translation>Nazwa pliku, do którego eksportować</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="351"/>
        <source>This is the filename you wish to export a certificate to.</source>
        <translation>To jest nazwa pliku do, którego chcesz zapisać swój certyfikat.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="358"/>
        <source>Save As...</source>
        <translation>Zapisz jako...</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="372"/>
        <source>This is the certificate Mumble currently uses. It will be exported.</source>
        <translation>To jest certyfikat obecnie używany w Mumble. Zostanie on wyeksportowany.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="386"/>
        <source>Generate a new certificate for strong authentication</source>
        <translation>Generuj nowy certyfikat dla silnej autoryzacji</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="395"/>
        <source>&lt;p&gt;Mumble will now generate a strong certificate for authentication to servers.&lt;/p&gt;&lt;p&gt;If you wish, you may provide some additional information to be stored in the certificate, which will be presented to servers when you connect. If you provide a valid email address, you can upgrade to a CA issued email certificate later on, which provides strong identification.&lt;/p&gt;</source>
        <translation>&lt;p&gt; Za chwilę Mumble wygeneruje silny certyfikat, abyś mógł autoryzować się na serwerach.&lt;/p&gt;&lt;p&gt;Jeżeli chcesz, możesz podać dodatkowe informacje i zapisać je wewnątrz certyfikatu, zostaną one przesłane na serwer, do którego podłączysz się w przyszłości. Jeżei podasz prawdziwy adres e-mail możesz śmiało uaktualnić swój certyfikat do wersji CA co sprawi, że będzie on jeszcze silniej zabezpieczony.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="405"/>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="415"/>
        <source>Email</source>
        <translation>Email</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="425"/>
        <source>Your email address (e.g. johndoe@mumble.info)</source>
        <translation>Twój adres email (np. jankowalski@mumble.info)</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="428"/>
        <source>This is your email address. It is strongly recommended to provide a valid email address, as this will allow you to upgrade to a strong certificate without authentication problems.</source>
        <translation>To jest twój adres email. Zalecane jest użycie prawdziwego adresu email, co pozwoli na ulepszenie do silnego certyfikatu bez problemów z autoryzacją.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="442"/>
        <source>Your name (e.g. John Doe)</source>
        <translation>Twoja nazwa (np. Jan Kowalski)</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="445"/>
        <source>This is your name, and will be filled out in the certificate. This field is entirely optional.</source>
        <translation>To twoja nazwa, zostanie użyta w certyfikacie. Te pole jest opcjonalne.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="453"/>
        <source>Finish</source>
        <translation>Zakończ</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="456"/>
        <source>Certificate-based authentication is ready for use</source>
        <translation>Autoryzacja bazująca na certyfikatach jest gotowa do użytkowania</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="465"/>
        <source>Enjoy using Mumble with strong authentication.</source>
        <translation>Miłej zabawy z Mumble i silnymi certyfikatami.</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="57"/>
        <source>Automatic certificate creation</source>
        <translation>Automatyczne tworzenie certyfikatu</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="30"/>
        <source>&lt;p&gt;Mumble can use certificates to authenticate with servers. Using certificates avoids passwords, meaning you don&apos;t need to disclose any password to the remote site. It also enables very easy user registration.&lt;/p&gt;&lt;p&gt;While Mumble can work without certificates, the majority of servers will expect you to have one.&lt;/p&gt;
&lt;p&gt;
It is &lt;b&gt;strongly&lt;/b&gt; recommended that you &lt;a href=&quot;http://mumble.info/certificate.php&quot;&gt;create a trusted certificate&lt;/a&gt;.
&lt;/p&gt;
</source>
        <translation>&lt;p&gt;Mumble może wykorzystywać certyfikaty do autoryzacji na serwerach. Używanie certyfikatu to przede wszystkim brak haseł, oznacza to że nie musisz ujawniać hasła na stronach którym nie ufasz. Pozwala również na bardzo łatwą rejestracje na jakimkolwiek serwerze.&lt;/p&gt;&lt;p&gt;Mumble może pracować bez certyfikatów ale licz się z tym, że większość serwerów będzie ich wymagać.&lt;/p&gt;&lt;p&gt;&lt;b&gt;Bardzo&lt;/b&gt; zalecamy wygenerowanie &lt;a href=&quot;http://mumble.info/certificate.php&quot;&gt;zaufanego certyfikatu&lt;/a&gt;.&lt;/p</translation>
    </message>
</context>
<context>
    <name>ChanACL</name>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>W</source>
        <translation type="obsolete">W</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>T</source>
        <translation type="obsolete">T</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>E</source>
        <translation type="obsolete">E</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>S</source>
        <translation type="obsolete">S</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>A</source>
        <translation type="obsolete">A</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>M</source>
        <translation type="obsolete">M</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>K</source>
        <translation type="obsolete">K</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>C</source>
        <translation type="obsolete">C</translation>
    </message>
    <message>
        <location filename="Cert.ui" line="0"/>
        <source>L</source>
        <translation type="obsolete">L</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="214"/>
        <source>None</source>
        <translation>Żaden</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="0"/>
        <source>Write</source>
        <translation type="obsolete">Pisanie</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="218"/>
        <source>Traverse</source>
        <translation>Wejście na pod-kanał</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="220"/>
        <source>Enter</source>
        <translation>Wejście</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="222"/>
        <source>Speak</source>
        <translation>Mowa</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="0"/>
        <source>AltSpeak</source>
        <translation type="obsolete">Alternatywna mowa</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="226"/>
        <source>Mute/Deafen</source>
        <translation>Wyciszanie / Ogłuszanie</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="0"/>
        <source>Move/Kick</source>
        <translation type="obsolete">Przenieś / Kopnij</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="230"/>
        <source>Make channel</source>
        <translation>Tworzenie kanałów</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="232"/>
        <source>Make temporary</source>
        <translation>Tworzenie kanałów tymczasowych</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="234"/>
        <source>Link channel</source>
        <translation>Łączenie kanałów</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="147"/>
        <source>This represents no privileges.</source>
        <translation>Brak uprawnień.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="150"/>
        <source>This represents total access to the channel, including the ability to change group and ACL information. This privilege implies all other privileges.</source>
        <translation>Uprawnienie to umożliwia całkowity dostęp do kanału, wliczając możliwość dokonywania zmian w grupach oraz regułach ACL. To uprawnienie zawiera wszystkie pozostałe uprawnienia.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="154"/>
        <source>This represents the permission to traverse the channel. If a user is denied this privilege, he will be unable to access this channel and any sub-channels in any way, regardless of other permissions in the sub-channels.</source>
        <translation>Uprawnienie to umożliwia wejście na pod-kanały. Jeżeli użytkownik ma zabroniony dostęp do tego uprawnienia nie będzie w stanie w żaden sposób wejść na pod-kanały, niezależnie od innych uprawnień jakie posiada w pod-kanałach.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="157"/>
        <source>This represents the permission to join the channel. If you have a hierarchical channel structure, you might want to give everyone Traverse, but restrict Enter in the root of your hierarchy.</source>
        <translation>Uprawnienie to umożliwia wejście na kanał. Jeżeli posiadasz hierarchiczną strukturę kanałów, możesz nadać każdemu uprawnienie wejścia na pod-kanały jednocześnie blokując dostęp do głównego kanału w hierarchii.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="161"/>
        <source>This represents the permission to speak in a channel. Users without this privilege will be suppressed by the server (seen as muted), and will be unable to speak until they are unmuted by someone with the appropriate privileges.</source>
        <translation>Uprawnienie to umożliwia używanie mowy na kanale. Użytkownicy nieposiadający tego uprawnienia będą automatycznie wyciszani przez serwer, oraz nie będą w stanie mówić dopóki osoba z odpowiednimi uprawnieniami nie zdejmie im wyciszenia.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="165"/>
        <source>This represents the permission to whisper to this channel from the outside. This works exactly like the &lt;i&gt;speak&lt;/i&gt; privilege, but applies to packets spoken with the Whisper key held down. This may be used to broadcast to a hierarchy of channels without linking.</source>
        <translation>Uprawnienie to umożliwia używanie szeptu do tego kanału z zewnątrz. Działa dokładnie tak samo jak uprawnienie &lt;i&gt;Mowa&lt;/i&gt;, lecz jest stosowany do pakietów mowy, gdy użyty jest przycisk Szeptu. Może zostać użyte do wygłaszania przemówień do całego drzewa kanałów bez potrzeby ich linkowania.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="168"/>
        <source>This represents the permission to mute and deafen other users. Once muted, a user will stay muted until he is unmuted by another privileged user or reconnects to the server.</source>
        <translation>Uprawnienie to umożliwia ogłuszanie oraz wyciszanie mikrofonu innym użytkownikom. Gdy użytkownik zostanie wyciszony pozostanie w tym stanie dopóki inny uprawniony użytkownik nie zdejmie wyciszenia lub do czasu ponownego połączenia z serwerem.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="173"/>
        <source>This represents the permission to move a user to another channel or kick him from the server. To actually move the user, either the moving user must have Move privileges in the destination channel, or the user must normally be allowed to enter the channel. Users with this privilege can move users into channels the target user normally wouldn&apos;t have permission to enter.</source>
        <translation>Uprawnienie to umożliwia przenoszenie użytkowników na inne kanały oraz wykopanie ich z serwera. Aby przenieść użytkownika, użytkownik przenoszący musi mieć uprawnienie &lt;i&gt;Przenoszenie użytkowników&lt;/i&gt; w docelowym kanale. Użytkownicy z tym uprawnieniem mogą przenosić innych użytkowników na kanały na które sami nie mogli by normalnie wejść.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="176"/>
        <source>This represents the permission to make sub-channels. The user making the sub-channel will be added to the admin group of the sub-channel.</source>
        <translation>Uprawnienie to umożliwia tworzenie pod-kanałów. Użytkownik tworzący pod-kanał zostaje automatycznie dodany do grupy administratorów tego pod-kanału.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="179"/>
        <source>This represents the permission to make a temporary subchannel. The user making the sub-channel will be added to the admin group of the sub-channel. Temporary channels are not stored and disappear when the last user leaves.</source>
        <translation>Uprawnienie to umożliwia tworzenie tymczasowych pod-kanałów. Użytkownik twożący pod-kanał zostaje automatycznie dodany do grupy administratorów tego pod-kanału. Tymczasowe kanały nie są zapisywane i znikają gdy wszyscy użytkownicy z nich wyjdą.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="183"/>
        <source>This represents the permission to link channels. Users in linked channels hear each other, as long as the speaking user has the &lt;i&gt;speak&lt;/i&gt; privilege in the channel of the listener. You need the link privilege in both channels to create a link, but just in either channel to remove it.</source>
        <translation>Uprawnienie to umożliwia łączenie kanałów. Użytkownicy na połączonych kanałach słyszą się nawzajem, jeżeli tylko mówiąca osoba posiada uprawnienie &lt;i&gt;Mowa&lt;/i&gt; na kanale gdzie znajduje się słuchacz. Aby połączyć kanały musisz posiadać uprawnienie łączenia kanałów na obu kanałach, aby je rozłączyć tylko w jednym.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="185"/>
        <source>This represents the permission to write text messages to other users in this channel.</source>
        <translation>Uprawnienie to umożliwia pisanie wiadomości tekstowych do innych użytkowników znajdujących się na tym kanale.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="187"/>
        <source>This represents the permission to forcibly remove users from the server.</source>
        <translation>Uprawnia do siłowego usuwania użytkowników z serwera.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="189"/>
        <source>This represents the permission to permanently remove users from the server.</source>
        <translation>Uprawnienie to umożliwia trwałe usunięcie użytkownika z serwera.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="191"/>
        <source>This represents the permission to register and unregister users on the server.</source>
        <translation>Uprawnia do rejestrowania oraz wyrejestrowywania użytkowników na serwerze.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="193"/>
        <source>This represents the permission to register oneself on the server.</source>
        <translation>Uprawnienie to umożliwia rejestrację samego siebie na serwerze.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="224"/>
        <source>Whisper</source>
        <translation>Szept</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="228"/>
        <source>Move</source>
        <translation>Przenoszenie użytkowników</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="236"/>
        <source>Text message</source>
        <translation>Wysyłanie wiadomości tekstowej</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="238"/>
        <source>Kick</source>
        <translation>Kopanie użytkowników</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="240"/>
        <source>Ban</source>
        <translation>Banowanie użytkowników</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="242"/>
        <source>Register User</source>
        <translation>Rejestracje użytkowników</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="244"/>
        <source>Register Self</source>
        <translation>Rejestrację samego siebie</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="0"/>
        <source>This represents the permission to speak in a channel with flagged speech. This works exactly like the &lt;i&gt;speak&lt;/i&gt; privilege, but applies to packets spoken with AltPushToTalk held down. This may be used to broadcast to a hierarchy of channels without linking.</source>
        <translation type="obsolete">Przedstawia możliwość alternatywnej mowy. Przywilej ten działa dokładnie tak jak &lt;i&gt;mowa&lt;/i&gt;, ale dotyczy użycia przycisku alternatywnej mowy. Przywilej ten może być użyty do ogłaszania czegoś ważnego do całego drzewa kanałów bez ich łączenia.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="0"/>
        <source>This represents the permission to mute and deafen other players. Once muted, a player will stay muted until he is unmuted by another privileged player or reconnects to the server.</source>
        <translation type="obsolete">Przedstawia możliwość wyciszania użytkowników. Gdy użytkownik zostanie wyciszony pozostanie wyciszony dopóki inny uprawniony użytkownik nie zdejmie wyciszenia lub do czasu ponownego połączenia z serwerem.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="0"/>
        <source>This represents the permission to move a player to another channel or kick him from the server. To actually move the player, either the moving player must have Move/Kick privileges in the destination channel, or the player must normally be allowed to enter the channel. Players with this privilege can move players into channels the target player normally wouldn&apos;t have permission to enter.</source>
        <translation type="obsolete">Przedstawia możliwość przenoszenia użytkowników na inne kanały oraz kopnięcia ich z serwera. Aby móc przenieść użytkownika musi on posiadać przywilej przenoszenia oraz kopnięcia użytkownika lub posiadać zezwolenie na wejście na kanale docelowym. Użytkownicy z tym przywilejem mogą przenosić innych użytkowników na kanały gdzie nie  mogli by normalnie wejść.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="0"/>
        <source>This represents the permission to make sub-channels. The player making the sub-channel will be added to the admin group of the sub-channel.</source>
        <translation type="obsolete">Przedstawia możliwość tworzenia pod-kanałów. Użytkownik tworzący pod-kanał zostaje automatycznie dodany do grupy &lt;i&gt;admin&lt;/i&gt; w pod-kanale.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="0"/>
        <source>This represents the permission to link channels. Players in linked channels hear each other, as long as the speaking player has the &lt;i&gt;speak&lt;/i&gt; privilege in the channel of the listener. You need the link privilege in both channels to create a link, but just in either channel to remove it.</source>
        <translation type="obsolete">Przedstawia możliwość łączenia kanałów. Gdy mówiący użytkownik posiada przywilej &lt;i&gt;speak&lt;/i&gt; na kanale gdzie są osoby które mogą go słuchać, użytkownicy połączonych kanałów słyszą się nawzajem. Aby połączyć kanały potrzebujesz przywileju łączenia kanałów na obu kanałach i tylko w jednym by rozłączyć kanały.</translation>
    </message>
    <message>
        <location filename="../ACL.cpp" line="216"/>
        <source>Write ACL</source>
        <translation>Edycję ACL</translation>
    </message>
</context>
<context>
    <name>ChatbarLineEdit</name>
    <message>
        <location filename="CustomElements.cpp" line="71"/>
        <source>Paste and send</source>
        <translation>Wklej i wyślij</translation>
    </message>
    <message>
        <location filename="CustomElements.cpp" line="85"/>
        <source>Type chat message here</source>
        <translation>Wpisz wiadomość</translation>
    </message>
</context>
<context>
    <name>ClientPlayer</name>
    <message>
        <location filename="CustomElements.cpp" line="0"/>
        <source>Authenticated</source>
        <translation type="obsolete">Uwierzytelniony</translation>
    </message>
    <message>
        <location filename="CustomElements.cpp" line="0"/>
        <source>Muted (server)</source>
        <translation type="obsolete">Wyciszony mikrofon (przez serwer)</translation>
    </message>
    <message>
        <location filename="CustomElements.cpp" line="0"/>
        <source>Deafened (server)</source>
        <translation type="obsolete">Wyciszone słuchawki (przez serwer)</translation>
    </message>
    <message>
        <location filename="CustomElements.cpp" line="0"/>
        <source>Local Mute</source>
        <translation type="obsolete">Lokalne wyciszenie</translation>
    </message>
    <message>
        <location filename="CustomElements.cpp" line="0"/>
        <source>Muted (self)</source>
        <translation type="obsolete">Wyciszony mikrofon (przez użytkownika)</translation>
    </message>
    <message>
        <location filename="CustomElements.cpp" line="0"/>
        <source>Deafened (self)</source>
        <translation type="obsolete">Wyciszone słuchawki (przez użytkownika)</translation>
    </message>
</context>
<context>
    <name>ClientUser</name>
    <message>
        <location filename="ClientUser.cpp" line="122"/>
        <source>Friend</source>
        <translation>Znajomy</translation>
    </message>
    <message>
        <location filename="ClientUser.cpp" line="124"/>
        <source>Authenticated</source>
        <translation>Uwierzytelniony</translation>
    </message>
    <message>
        <location filename="ClientUser.cpp" line="126"/>
        <source>Muted (server)</source>
        <translation>Wyciszony (przez serwer)</translation>
    </message>
    <message>
        <location filename="ClientUser.cpp" line="128"/>
        <source>Deafened (server)</source>
        <translation>Ogłuszony (przez serwer)</translation>
    </message>
    <message>
        <location filename="ClientUser.cpp" line="130"/>
        <source>Local Mute</source>
        <translation>Wyciszenie lokalne</translation>
    </message>
    <message>
        <location filename="ClientUser.cpp" line="132"/>
        <source>Muted (self)</source>
        <translation>Wyciszony (przez siebie)</translation>
    </message>
    <message>
        <location filename="ClientUser.cpp" line="134"/>
        <source>Deafened (self)</source>
        <translation>Ogłuszony (przez siebie)</translation>
    </message>
</context>
<context>
    <name>ConfigDialog</name>
    <message>
        <location filename="ConfigDialog.ui" line="14"/>
        <source>Mumble Configuration</source>
        <translation>Konfiguracja Mumble</translation>
    </message>
    <message>
        <location filename="ConfigDialogDelegate.mm" line="135"/>
        <source>Advanced</source>
        <translation>Zaawansowane</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="73"/>
        <source>Accept changes</source>
        <translation>Akceptuj zmiany</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="75"/>
        <source>This button will accept current settings and return to the application.&lt;br /&gt;The settings will be stored to disk when you leave the application.</source>
        <translation>Ten przycisk zaakceptuje zmiany i powróci do aplikacji.&lt;br /&gt;Ustawienia zostaną zapisane na dysku jak zamkniesz program.</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="78"/>
        <source>Reject changes</source>
        <translation>Odrzuć zmiany</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="80"/>
        <source>This button will reject all changes and return to the application.&lt;br /&gt;The settings will be reset to the previous positions.</source>
        <translation>Ten przycisk odrzuca zmiany i powraca do aplikacji. ustawienia zostaną przywrócone do poprzednich wartości.</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="83"/>
        <source>Apply changes</source>
        <translation>Zastosuj zmiany</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="84"/>
        <source>This button will immediately apply all changes.</source>
        <translation>Ten przycisk natychmiastowo uwzględnia zmiany.</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="87"/>
        <source>Undo changes for current page</source>
        <translation>Cofnij zmiany na aktualnej karcie</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="88"/>
        <source>This button will revert any changes done on the current page to the most recent applied settings.</source>
        <translation>Cofa dokonane zmiany na aktualnej karcie do najcześciej wybieranych ustawień.</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="91"/>
        <source>Restore defaults for current page</source>
        <translation>Przywróć domyślne na aktualnej karcie</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="94"/>
        <source>This button will restore the settings for the current page only to their defaults. Other pages will not be changed.&lt;br /&gt;To restore all settings to their defaults, you will have to use this button on every page.</source>
        <translation>Przywróci ustawienia domyślne dla obecnej karty. Inne karty nie zostaną zmienione. &lt;br /&gt;Aby przywrócić wszystkie opcje do domyślnych wartości musisz użyć tego przycisku na każdej stronie.</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>This button will restore the settings for the current page only to their defaults. Other pages will be not be changed.&lt;br /&gt;To restore all settings to their defaults, you will have to use this button on every page.</source>
        <translation type="obsolete">Przywraca domyślne ustawienia dla danej strony.</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>Show all configuration items</source>
        <translation type="obsolete">Pokazuj wszystkie pozycje do skonfigurowania</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>&lt;b&gt;This will show all configuration items.&lt;/b&gt;&lt;br /&gt;Mumble contains a lot of configuration items that most users won&apos;t need to change. Checking this will show all configurable items.</source>
        <translation type="obsolete">&lt;b&gt;Pokazuj wszystkie pozycje do skonfigurowania</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>Expert Config</source>
        <translation type="obsolete">Zaawansowane</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>Tab 1</source>
        <translation type="obsolete">Zakładka 1</translation>
    </message>
</context>
<context>
    <name>ConnectDialog</name>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>A&amp;ddress</source>
        <translation type="obsolete">A&amp;dres</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>&amp;Port</source>
        <translation type="obsolete">&amp;Port</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>&amp;Username</source>
        <translation type="obsolete">&amp;Użytkownik</translation>
    </message>
    <message>
        <location filename="ConfigDialog.mm" line="0"/>
        <source>&amp;Password</source>
        <translation type="obsolete">&amp;Hasło</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="733"/>
        <source>&amp;Connect</source>
        <translation>&amp;Połącz</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>Cancel</source>
        <translation type="obsolete">Anuluj</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>&amp;Add</source>
        <translation type="obsolete">&amp;Dodaj</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>&amp;Remove</source>
        <translation type="obsolete">&amp;Usuń</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>&amp;Custom Servers</source>
        <translation type="obsolete">&amp;Niestandardowe serwery</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>Server &amp;Browser</source>
        <translation type="obsolete">Przeglądarka &amp;serwerów</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>Address</source>
        <translation type="obsolete">Adres IP</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>URL</source>
        <translation type="obsolete">URL</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>C&amp;opy to custom</source>
        <translation type="obsolete">&amp;Kopiuj do niestandardowych</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>&amp;View Webpage</source>
        <translation type="obsolete">&amp;Zobacz WWW</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="864"/>
        <source>Connecting to %1</source>
        <translation>Łączenie do %1</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="864"/>
        <source>Enter username</source>
        <translation>Podaj nazwę użytkownika</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="398"/>
        <source>Adding host %1</source>
        <translation>Dodawanie hosta %1</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="48"/>
        <source>Servername</source>
        <translation>Nazwa serwera</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="462"/>
        <source>Hostname</source>
        <translation>Host</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="465"/>
        <source>Bonjour name</source>
        <translation>Nazwa Bonjur</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="468"/>
        <source>Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="469"/>
        <source>Addresses</source>
        <translation>Adresy</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="472"/>
        <source>Website</source>
        <translation>Strona WWW</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="475"/>
        <source>Packet loss</source>
        <translation>Utracone pakiety</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="478"/>
        <source>Ping (80%)</source>
        <translation>Opóźnienie (80%)</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="481"/>
        <source>%1 ms</source>
        <translation>%1 ms</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="480"/>
        <source>Ping (95%)</source>
        <translation>Opóźnienie (95%)</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="482"/>
        <source>Bandwidth</source>
        <translation>Przepustowość</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="482"/>
        <source>%1 kbit/s</source>
        <translation>%1 kbit/s</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="772"/>
        <source>&amp;Filters</source>
        <translation>&amp;Filtry</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="58"/>
        <source>Users</source>
        <translation>Użytkowników</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="484"/>
        <source>Version</source>
        <translation>Wersja</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>Connect</source>
        <translation type="obsolete">Połącz</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>Add New...</source>
        <translation type="obsolete">Dodaj nowy...</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>Filters</source>
        <translation type="obsolete">Filtry</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="1430"/>
        <source>Failed to fetch server list</source>
        <translation>Nie udało się załadować listy</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>&amp;Label</source>
        <translation type="obsolete">&amp;Nazwa</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>Label</source>
        <translation type="obsolete">Nazwa</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="0"/>
        <source>-Unnamed entry-</source>
        <translation type="obsolete">Bez Nazwy</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="14"/>
        <source>Mumble Server Connect</source>
        <translation>Lista serwerów Mumble</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="53"/>
        <source>Ping</source>
        <translation>Opóźnienie</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="73"/>
        <source>Remove from Favorites</source>
        <translation>Usuń z ulubionych</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Edit...</source>
        <translation type="obsolete">Edytuj...</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="86"/>
        <source>Add custom server</source>
        <translation>Dodaj serwer niestandardowy</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Add to Favorites</source>
        <translation type="obsolete">Dodaj do Ulubionych</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Open Webpage</source>
        <translation type="obsolete">Otwórz stronę WWW</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Show Reachable</source>
        <translation type="obsolete">Pokazuj osiągalne</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="110"/>
        <source>Show all servers that respond to ping</source>
        <translation>Wyświetl wszystkie serwery reagujące na ping</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Show Populated</source>
        <translation type="obsolete">Pokazuj zaludnione</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="124"/>
        <source>Show all servers with users</source>
        <translation>Wyświetl serwery z użytkownikami</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Show All</source>
        <translation type="obsolete">Pokazuj wszystkie</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="135"/>
        <source>Show all servers</source>
        <translation>Wyświetl wszystkie serwery</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="140"/>
        <source>&amp;Copy</source>
        <translation>&amp;Kopiuj</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="143"/>
        <source>Copy favorite link to clipboard</source>
        <translation>Kopiuj ulubiony do schowka</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="148"/>
        <source>&amp;Paste</source>
        <translation>&amp;Wklej</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="151"/>
        <source>Paste favorite from clipboard</source>
        <translation>Wklej ulubiony ze schowka</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Unknown</source>
        <translation type="obsolete">Nieznany</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>New</source>
        <translation type="obsolete">Nowy</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Add</source>
        <translation type="obsolete">Dodaj</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="0"/>
        <source>Update</source>
        <translation type="obsolete">Aktualizuj</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="78"/>
        <source>&amp;Edit...</source>
        <translation>&amp;Edytuj...</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="83"/>
        <source>&amp;Add New...</source>
        <translation>&amp;Dodaj nowy...</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="91"/>
        <source>Add to &amp;Favorites</source>
        <translation>Dodaj do &amp;ulubionych</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="96"/>
        <source>Open &amp;Webpage</source>
        <translation>Otwórz &amp;stronę</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="107"/>
        <source>Show &amp;Reachable</source>
        <translation>Wyświetlaj &amp;osiągalne</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="121"/>
        <source>Show &amp;Populated</source>
        <translation>Wyświetl &amp;zaludnione</translation>
    </message>
    <message>
        <location filename="ConnectDialog.ui" line="132"/>
        <source>Show &amp;All</source>
        <translation>Wyświetlaj &amp;wszystkie</translation>
    </message>
</context>
<context>
    <name>ConnectDialogEdit</name>
    <message>
        <location filename="ConnectDialogEdit.ui" line="14"/>
        <source>Edit Server</source>
        <translation>Edycja Serwera</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="20"/>
        <source>&amp;Servername</source>
        <translation>&amp;Nazwa serwera</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="30"/>
        <source>Name of the server</source>
        <translation>Nazwa serwera</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="33"/>
        <source>&lt;b&gt;Name&lt;/b&gt;&lt;br/&gt;
Name of the server. This is what the server will be named like in your serverlist and can be chosen freely.</source>
        <translation>&lt;b&gt;Nazwa&lt;/b&gt;&lt;br/&gt;Nazwa serwera. Ustala nazwę serwera która będzie widoczna na liście serwerów. Może być wybrana dowolnie.</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="41"/>
        <source>A&amp;ddress</source>
        <translation>A&amp;dres</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="51"/>
        <source>Internet address of the server.</source>
        <translation>Adres Internetowy serwera.</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="54"/>
        <source>&lt;b&gt;Address&lt;/b&gt;&lt;br/&gt;
Internet address of the server. This can be a normal hostname, an IPv4/IPv6 address or a Bonjour service identifier. Bonjour service identifiers have to be prefixed with a &apos;@&apos; to be recognized by Mumble.</source>
        <translation>&lt;b&gt;Adres&lt;/b&gt;&lt;br/&gt;Adres Internetowy serwera. To może być zwykła nazwa hosta, adres IPv4/IPv6 lub adres usługi Bonjour. Identyfikator usługi Bonjour musi być rozpoczęty znakiem @, aby był rozpoznawany przez Mumble.</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="62"/>
        <source>&amp;Port</source>
        <translation>&amp;Port</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="72"/>
        <source>Port on which the server is listening</source>
        <translation>Port na, którym nasłuchuje serwer</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="75"/>
        <source>&lt;b&gt;Port&lt;/b&gt;&lt;br/&gt;
Port on which the server is listening. If the server is identified by a Bonjour service identifier this field will be ignored.</source>
        <translation>&lt;b&gt;Port&lt;/b&gt;&lt;br/&gt;Port na, którym nasłuchuje serwer. Jeżeli serwer jest identyfikowany przez usługę Bonjour pole te będzie ignorowane.</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="83"/>
        <source>&amp;Username</source>
        <translation>&amp;Użytkownik</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="93"/>
        <source>Username to send to the server</source>
        <translation>Nazwa użytkownika na serwerze</translation>
    </message>
    <message>
        <location filename="ConnectDialogEdit.ui" line="96"/>
        <source>&lt;b&gt;Username&lt;/b&gt;&lt;br/&gt;
Username to send to the server. Be aware that the server can impose restrictions on how a username might look like. Also your username could already be taken by another user.</source>
        <translation>&lt;b&gt;Nazwa użytkownika&lt;/b&gt;&lt;br/&gt;Nazwa użytkownika na serwerze. Zwróć uwagę na to, że serwer może nażucać wygląd poszczególnych nazw. Twoja nazwa użytkownika może być też po prostu zajęta przez kogoś innego.</translation>
    </message>
</context>
<context>
    <name>CoreAudioSystem</name>
    <message>
        <location filename="CoreAudio.cpp" line="85"/>
        <source>Default Device</source>
        <translation>Urządzenie domyślne</translation>
    </message>
</context>
<context>
    <name>CrashReporter</name>
    <message>
        <location filename="CrashReporter.cpp" line="37"/>
        <source>Mumble Crash Report</source>
        <translation>Raportowanie Błędów Mumble</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="44"/>
        <source>&lt;p&gt;&lt;b&gt;We&apos;re terribly sorry, but it seems Mumble has crashed. Do you want to send a crash report to the Mumble developers?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;The crash report contains a partial copy of Mumble&apos;s memory at the time it crashed, and will help the developers fix the problem.&lt;/p&gt;</source>
        <translation>&lt;p&gt;&lt;b&gt;Okropnie nam przykro ale wygląda na to, że Mumble się wysypał. Czy chcesz wysłać raport z błędem do twórców programu?&lt;/b&gt;&lt;/p&gt;&lt;p&gt;Raport ten zawiera kopię pamięci Mumble z momentu, w którym program przestał funkcjonować, pomoże on w dużej mierze naszej drużynie szybko usunąć błąd, który spowodował ten problem.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="51"/>
        <source>Email address (optional)</source>
        <translation>Adres email (opcjonalnie)</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="60"/>
        <source>Please describe briefly, in English, what you were doing at the time of the crash</source>
        <translation>Prosimy o krótki opis czynności w języku Angielskim, które wykonywałeś podczas wystąpienia błędu</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="65"/>
        <source>Send Report</source>
        <translation>Wyślij raport</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="68"/>
        <source>Don&apos;t send report</source>
        <translation>Nie wysyłaj</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="93"/>
        <source>Crash upload successful</source>
        <translation>Raport został przesłany pomyślnie</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="93"/>
        <source>Thank you for helping make Mumble better!</source>
        <translation>Dziękujemy za pomoc przy Mumble! Mumble stanie się lepszy dzięki tobie!</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="97"/>
        <source>Crash upload failed</source>
        <translation>Nie udało się wysłać raportu</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="95"/>
        <source>We&apos;re really sorry, but it appears the crash upload has failed with error %1 %2. Please inform a developer.</source>
        <translation>Bardzo nam przykro ale wygląda na to, że wysyłanie raportu nie powiodło się z powodu %1 %2. Prosimy o kontakt z twórcami aplikacji.</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="97"/>
        <source>This really isn&apos;t funny, but apparently there&apos;s a bug in the crash reporting code, and we&apos;ve failed to upload the report. You may inform a developer about error %1</source>
        <translation>To zapewne nie jest śmieszne, ale wygląda na to, że istnieje mały błąd w narzędziu do wysyłania raportów. Możesz powiadomić twórców programu o błędzie %1</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="211"/>
        <source>Uploading crash report</source>
        <translation>Wysyłanie raportu</translation>
    </message>
    <message>
        <location filename="CrashReporter.cpp" line="211"/>
        <source>Abort upload</source>
        <translation>Przerwij</translation>
    </message>
</context>
<context>
    <name>DXAudioInput</name>
    <message>
        <location filename="DirectSound.cpp" line="556"/>
        <source>Opening chosen DirectSound Input failed. Default device will be used.</source>
        <translation>Otwieranie wybranego wejścia dźwięku DirectSound nie powiodło się. Zostanie użyte urządzenie domyślne.</translation>
    </message>
    <message>
        <location filename="DirectSound.cpp" line="174"/>
        <source>Default DirectSound Voice Input</source>
        <translation>Domyślne wejście dźwięku DirectSound</translation>
    </message>
    <message>
        <location filename="DirectSound.cpp" line="635"/>
        <source>Opening chosen DirectSound Input device failed. No microphone capture will be done.</source>
        <translation>Otwieranie wybranego wejścia dźwięku nie powiodło się. Dźwięk z mikrofonu nie będzie pobierany.</translation>
    </message>
    <message>
        <location filename="DirectSound.cpp" line="630"/>
        <source>Lost DirectSound input device.</source>
        <translation>Utracono urządzenie wejścia DirectSound.</translation>
    </message>
</context>
<context>
    <name>DXAudioOutput</name>
    <message>
        <location filename="DirectSound.cpp" line="463"/>
        <source>Opening chosen DirectSound Output failed. No audio will be heard.</source>
        <translation>Otwieranie wybranego wyjścia dźwięku nie powiodło się. Żaden dźwięk nie będzie słuszany.</translation>
    </message>
    <message>
        <location filename="DirectSound.cpp" line="381"/>
        <source>Opening chosen DirectSound Output failed. Default device will be used.</source>
        <translation>Otwieranie wybranego wyjścia dźwięku DirectSound nie powiodło się. Zostanie użyte urządzenie domyślne.</translation>
    </message>
    <message>
        <location filename="DirectSound.cpp" line="134"/>
        <source>Default DirectSound Voice Output</source>
        <translation>Domyślne wyjście dźwięku DirectSound</translation>
    </message>
    <message>
        <location filename="DirectSound.cpp" line="459"/>
        <source>Lost DirectSound output device.</source>
        <translation>Utracono urządzenie wyjścia DirectSound.</translation>
    </message>
</context>
<context>
    <name>Database</name>
    <message>
        <location filename="DirectSound.cpp" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="Database.cpp" line="84"/>
        <source>Mumble failed to initialize a database in any
of the possible locations.</source>
        <translation>Nie udało się zainicjalizować bazy danych w żadnej z podanych lokacji.</translation>
    </message>
    <message>
        <location filename="Database.cpp" line="91"/>
        <source>The database &apos;%1&apos; is read-only. Mumble can not store server settings (ie. SSL certificates) until you fix this problem.</source>
        <translation>Baza danych &apos;%1&apos; jest tylko do odczytu. Mumble nie może przechowywać ustawień serwera (np. certyfikatów SSL) dopóki nie naprawisz tego problemu.</translation>
    </message>
</context>
<context>
    <name>GlobalShortcut</name>
    <message>
        <location filename="GlobalShortcut.ui" line="17"/>
        <source>Shortcuts</source>
        <translation>Skróty</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="65"/>
        <source>List of configured shortcuts</source>
        <translation>Lista skonfigurowanych skrótów</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="99"/>
        <source>Function</source>
        <translation>Funkcja</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="104"/>
        <source>Data</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="109"/>
        <source>Shortcut</source>
        <translation>Skrót</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="114"/>
        <source>Suppress</source>
        <translation>Rezerwuj</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="23"/>
        <source>Add new shortcut</source>
        <translation>Dodaj nowy skrót</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="26"/>
        <source>This will add a new global shortcut</source>
        <translation>Dodaje nowy, globalny skrót</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="29"/>
        <source>&amp;Add</source>
        <translation>&amp;Dodaj</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="39"/>
        <source>Remove selected shortcut</source>
        <translation>Usuń zaznaczony skrót</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="42"/>
        <source>This will permanently remove a selected shortcut.</source>
        <translation>Trwale usunie wybrany skrót.</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.ui" line="45"/>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
</context>
<context>
    <name>GlobalShortcutConfig</name>
    <message>
        <location filename="GlobalShortcut.cpp" line="654"/>
        <source>Shortcuts</source>
        <translation>Skróty</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Function</source>
        <translation type="obsolete">Funkcja</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Shortcut</source>
        <translation type="obsolete">Skrót</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Shortcut bound to %1.</source>
        <translation type="obsolete">Skrót przypisany do %1.</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>&lt;b&gt;This is the global shortcut bound to %1&lt;/b&gt;&lt;br /&gt;Click this field and then the desired key/button combo to rebind. Double-click to clear.</source>
        <translation type="obsolete">&lt;b&gt;To jest globalny skrót przypisany do %1&lt;/b&gt;&lt;br /&gt; Kliknij na tym polu a potem użyj jakiegoś klawisza. Aby wyczyścić dane pole kliknij dwa razy.</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Double-click an entry to clear the shortcut.</source>
        <translation type="obsolete">Kliknij dwa razy, aby zresetować dany skrót.</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Suppress</source>
        <translation type="obsolete">Zarezerwuj</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="692"/>
        <source>Shortcut button combination.</source>
        <translation>Kombinacja klawiszy skrótów.</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="695"/>
        <source>&lt;b&gt;This is the global shortcut key combination.&lt;/b&gt;&lt;br /&gt;Click this field and then press the desired key/button combo to rebind. Double-click to clear.</source>
        <translation>&lt;b&gt;Globalna kombinacja klawiszy.&lt;/b&gt;&lt;br /&gt;Kliknij w to pole oraz naciśnij docelowy klawisz lub kombinację klawiszy. Podwójne kliknięcie czyści pole.</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="697"/>
        <source>Suppress keys from other applications</source>
        <translation>Zablokuj skrót innej aplikacji</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="700"/>
        <source>&lt;b&gt;This hides the button presses from other applications.&lt;/b&gt;&lt;br /&gt;Enabling this will hide the button (or the last button of a multi-button combo) from other applications. Note that not all buttons can be suppressed.</source>
        <translation>&lt;b&gt;Ukrywa wciśnięcia przycisków przed innymi aplikacjami.&lt;/b&gt;&lt;br /&gt; Włączając ukrywasz przycisk przed inną aplikacją (lub ostatni z kombinacji multi-przycisków). Nie wszystkie przyciski da się tak ukryć.</translation>
    </message>
</context>
<context>
    <name>GlobalShortcutMacInit</name>
    <message>
        <location filename="GlobalShortcut_macx.cpp" line="62"/>
        <source>Mumble has detected that it is unable to receive Global Shortcut events when it is in the background.&lt;br /&gt;&lt;br /&gt;This is because the Universal Access feature called &apos;Enable access for assistive devices&apos; is currently disabled.&lt;br /&gt;&lt;br /&gt;Please &lt;a href=&quot; &quot;&gt;enable this setting&lt;/a&gt; and continue when done.</source>
        <translation>Mumble wykrył, że nie jest w stanie odebrać Global Shortcut events kiedy działa w tle.&lt;br /&gt;&lt;br /&gt;To dlatego, że Universal Access zwany &quot;Uaktywnij dostęp dla assitive devices&quot; jest obecnie wyłączony.&lt;br /&gt;&lt;br /&gt;Prosimy &lt;a href=&quot; &quot;&gt;o włączenie tego ustawienia&lt;/a&gt; by kontynuować.</translation>
    </message>
</context>
<context>
    <name>GlobalShortcutTarget</name>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="14"/>
        <source>Whisper Target</source>
        <translation>Szepnij do</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="20"/>
        <source>Whisper to list of Users</source>
        <translation>Szept do listy użytkowników</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="34"/>
        <source>Channel Target</source>
        <translation>Docelowy kanał</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="63"/>
        <source>Restrict to Group</source>
        <translation>Ogranicz dla grupy</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="70"/>
        <source>If specified, only members of this group will receive the whisper.</source>
        <translation>Gdy zaznaczone, tylko użytkownicy tej grupy usłyszą szept.</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="81"/>
        <source>If checked the whisper will also be transmitted to linked channels.</source>
        <translation>Gdy zaznaczone, szept będzie również wysyłany do połączonych kanałów.</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="84"/>
        <source>Whisper to Linked channels</source>
        <translation>Szept do połączonych kanałów</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="91"/>
        <source>If checked this whisper will also be sent to the subchannels of the channel target.</source>
        <translation>Gdy zaznaczone, szept będzie również wysyłany do pod-kanałów docelowego kanału.</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="94"/>
        <source>Whisper to subchannels</source>
        <translation>Szept do pod-kanałów</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="110"/>
        <source>List of users</source>
        <translation>Lista użytkowników</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="122"/>
        <source>Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="129"/>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="166"/>
        <source>Whisper to Channel</source>
        <translation>Szept do kanału</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="173"/>
        <source>Modifiers</source>
        <translation>Modyfikacje</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="179"/>
        <source>Do not send positional audio information when using this whisper shortcut.</source>
        <translation>Nie wysyłaj pozycyjnego dźwięku podczas szeptu.</translation>
    </message>
    <message>
        <location filename="GlobalShortcutTarget.ui" line="182"/>
        <source>Ignore positional audio</source>
        <translation>Ignoruj dźwięk pozycyjny</translation>
    </message>
</context>
<context>
    <name>GlobalShortcutX</name>
    <message>
        <location filename="GlobalShortcut_unix.cpp" line="325"/>
        <source>Mouse %1</source>
        <translation>Mysz %1</translation>
    </message>
</context>
<context>
    <name>LCD</name>
    <message>
        <location filename="LCD.cpp" line="280"/>
        <source>Not connected</source>
        <translation>Niepołączony</translation>
    </message>
</context>
<context>
    <name>LCDConfig</name>
    <message>
        <location filename="LCD.cpp" line="0"/>
        <source>Graphic</source>
        <translation type="obsolete">Grafika</translation>
    </message>
    <message>
        <location filename="LCD.cpp" line="0"/>
        <source>Character</source>
        <translation type="obsolete">Tekst</translation>
    </message>
    <message>
        <location filename="LCD.cpp" line="120"/>
        <source>Enable this device</source>
        <translation>Uaktywnij to urządzenie</translation>
    </message>
    <message>
        <location filename="LCD.cpp" line="129"/>
        <source>LCD</source>
        <translation>LCD</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="14"/>
        <source>Form</source>
        <translation>Formularz</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="0"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;This is the list of available LCD devices on your system.  It lists devices by name, but also includes the size of the display and the LCD type. Mumble supports outputting to several LCD devices at a time.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;Type:&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;Mumble supports two different types of LCD devices. A Graphic LCD allows Mumble to draw each individual pixel of the display, whereas a Character LCD only allows Mumble to show characters. Some features are only available to Graphic LCDs.&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;Size:&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;This field describes the size of an LCD device. The size is given either in pixels (for Graphic LCDs) or in characters (for Character LCDs).&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;Enabled:&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt; font-weight:600; font-style:italic;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:normal;&quot;&gt;This decides whether Mumble should draw to a particular LCD device.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="obsolete">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;p, li { white-space: pre-wrap; }&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;To jest lista wszystkich dostępnych urządzeń LCD w twoim systemie.  Listuje wszystkie urządzdenia alfabetycznie oraz podaje informacje o rozmiarze ekranu czy jego typie. Mumble wspiera wyświetlanie napisów na kilku urządzeniach LCD jednocześnie.&lt;/p&gt;&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;Typ:&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;Mumble wspierda 2 rodzaje urządzeń LCD. Graficzny ekran LCD pozwala na wypełnienie pojedyńczych pikseli na ekranie, natomiast tekstowy ekran LCD pozwala na pokazywanie poszczególnych znaków na ekranie. Niektóre opcje programu działają tylko na graficznym ekranie LCD.&lt;/p&gt;&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;Rozmiar:&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;Te pole ocenia rozmiar urządzenia LCD. Piksele dla graficznych ekranów LCD lub tekstowe dla tekstowych LCD.&lt;/p&gt;&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;span style=&quot; font-weight:600; font-style:italic;&quot;&gt;Uaktywniony:&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt; font-weight:600; font-style:italic;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:normal;&quot;&gt;Ta opcja decyduje czy na danym ekranie LCD jest coś wyświetlane czy nie.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="34"/>
        <source>Devices</source>
        <translation>Urządzenia</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="50"/>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="0"/>
        <source>Type</source>
        <translation type="obsolete">Typ</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="26"/>
        <source>&lt;p&gt;This is the list of available LCD devices on your system.  It lists devices by name, but also includes the size of the display. Mumble supports outputting to several LCD devices at a time.&lt;/p&gt;
&lt;h3&gt;Size:&lt;/h3&gt;
&lt;p&gt;
This field describes the size of an LCD device. The size is given either in pixels (for Graphic LCDs) or in characters (for Character LCDs).&lt;/p&gt;
&lt;h3&gt;Enabled:&lt;/h3&gt;
&lt;p&gt;This decides whether Mumble should draw to a particular LCD device.&lt;/p&gt;</source>
        <translation>&lt;p&gt;To jes lista dostępnych urządzeń LCD w systemie. Lista posortowana jest alfabetycznie, zawiera również rozmiar wyświetlacza. Mumble wspiera wysyłanie sygnałów do kilku urządzeń LCD na raz.&lt;/p&gt;
&lt;h3&gt;Rozmiar:&lt;/h3&gt;
&lt;p&gt;
Te pole opisuje rozmiar urządzenia LCD. Rozmiar jest podany w pikselach lub w znakach w zależności od urządzenia.&lt;/p&gt;
&lt;h3&gt;Włączone:&lt;/h3&gt;
&lt;p&gt;Te pole decyduje czy Mumble powinno używać danego urządzenia LCD czy nie.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="55"/>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="60"/>
        <source>Enabled</source>
        <translation>Uaktywniony</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="77"/>
        <source>Views</source>
        <translation>Podgląd</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="83"/>
        <source>Minimum Column Width</source>
        <translation>Minimalna szerokość kolumny</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="90"/>
        <source>&lt;p&gt;This option decides the minimum width a column in the User View.&lt;/p&gt;
&lt;p&gt;If too many people are speaking at once, the User View will split itself into columns. You can use this option to pick a compromise between number of users shown on the LCD, and width of user names.&lt;/p&gt;
</source>
        <translation>&lt;p&gt;Określa minimalną szerokość kolumny w widoku użytkowników.&lt;/p&gt;&lt;p&gt;Jeżei zbyt wielu użytkowników mówi jednocześnie, widok użytkownika podzieli się na dwie kolumny. Możesz użyć tej opcji, aby wybrać kompromis pomiędzy ilością użytkowników wyświetlanych na ekranie a rozmiarem ich nazw.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="128"/>
        <source>This setting decides the width of column splitter.</source>
        <translation>Pomaga w ustaleniu szerokości kolumny podzielonych okien.</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="0"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:8pt;&quot;&gt;This option decides the minimum width a column in the Player View.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;If too many people are speaking at once, the Player View will split itself into columns.&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;You can use this option to pick a compromise between number of players shown on the&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;LCD, and width of player names.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="obsolete">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;p, li { white-space: pre-wrap; }&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:8pt;&quot;&gt;Ta opcja ustawia minimalną szerokość kolumny w Widoku Graczy.&lt;/span&gt;&lt;/p&gt;&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;Jeśli rozmawia zbyt duża ilość ludzi jednocześnie to kolumna z Widokiem Graczy podzieli się na dwie różne kolumny.&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:8pt;&quot;&gt;Możesz użyc tej opcji aby wybrać kompromis pomiędzy liczbą wyświetlanych graczy na ekranie LCD oraz szerokością nazw graczy.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="0"/>
        <source>TextLabel</source>
        <translation type="obsolete">Tekst</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="121"/>
        <source>Splitter Width</source>
        <translation>Szerokość rozdzielnika</translation>
    </message>
    <message>
        <location filename="LCD.ui" line="0"/>
        <source>&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;
&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:8pt;&quot;&gt;This setting decides the width of column splitter.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="obsolete">&lt;!DOCTYPE HTML PUBLIC &quot;-//W3C//DTD HTML 4.0//EN&quot; &quot;http://www.w3.org/TR/REC-html40/strict.dtd&quot;&gt;&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;p, li { white-space: pre-wrap; }&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;MS Shell Dlg 2&apos;; font-size:8.25pt; font-weight:400; font-style:normal;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:8pt;&quot;&gt;Ta opcja ustala szerkość rozdzielnika.&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>Log</name>
    <message>
        <location filename="Log.cpp" line="220"/>
        <source>Debug</source>
        <translation>Debug</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="221"/>
        <source>Critical</source>
        <translation>Błąd krytyczny</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="222"/>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="223"/>
        <source>Information</source>
        <translation>Informacja</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="224"/>
        <source>Server Connected</source>
        <translation>Połączenie z serwerem</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="225"/>
        <source>Server Disconnected</source>
        <translation>Rozłączenie od serwera</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player Joined Server</source>
        <translation type="obsolete">Użytkownik dołączył do serwera</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player Left Server</source>
        <translation type="obsolete">Użytkownik opuścił serwer</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player kicked (you or by you)</source>
        <translation type="obsolete">Użytkownik wykopany (ty lub przez ciebie) </translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player kicked</source>
        <translation type="obsolete">Użytkownik wykopany</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="230"/>
        <source>You self-muted/deafened</source>
        <translation>Ogłuszenie oraz wyciszenie (twoje)</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="231"/>
        <source>Other self-muted/deafened</source>
        <translation>Ogłuszenie oraz wyciszenie (kogoś innego)</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player muted (you)</source>
        <translation type="obsolete">Użytkownik wyciszył twój mikrofon</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player muted (by you)</source>
        <translation type="obsolete">Użytkownik ma wyciszony mikrofon (przez ciebie)</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player muted (other)</source>
        <translation type="obsolete">Użytkownik ma wyciszony mikrofon</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player Joined Channel</source>
        <translation type="obsolete">Użytkownik wszedł na kanał</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Player Left Channel</source>
        <translation type="obsolete">Użytkownik opuścił kanał</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="237"/>
        <source>Permission Denied</source>
        <translation>Brak dostępu</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="239"/>
        <source>Text Message</source>
        <translation>Wiadomość tekstowa</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Script Errors</source>
        <translation type="obsolete">Błędy skryptów</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="226"/>
        <source>User Joined Server</source>
        <translation>Dołączenie do serwera</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="227"/>
        <source>User Left Server</source>
        <translation>Opuszczenie serwera</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="228"/>
        <source>User kicked (you or by you)</source>
        <translation>Wykopanie użytkownika (ciebie lub przez ciebie)</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="229"/>
        <source>User kicked</source>
        <translation>Wykopanie użytkownika</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="232"/>
        <source>User muted (you)</source>
        <translation>Wyciszenie (ciebie)</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="233"/>
        <source>User muted (by you)</source>
        <translation>Wyciszenie (przez ciebie)</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="234"/>
        <source>User muted (other)</source>
        <translation>Wyciszenie (ktoś inny)</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="235"/>
        <source>User Joined Channel</source>
        <translation>Dołączenie do kanału</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="236"/>
        <source>User Left Channel</source>
        <translation>Opuszczenie kanału</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="290"/>
        <source>the server</source>
        <translation>serwer</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="407"/>
        <source>[[ Text object too large to display ]]</source>
        <translation>[[ Obiekt tekstowy jest zbyt duży, aby go wyświetlić ]]</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="449"/>
        <source>[Date changed to %1]
</source>
        <translation>[Data zmieniona na %1]</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="582"/>
        <source>link to %1</source>
        <translation>połączenie do %1</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="584"/>
        <source>ftp link to %1</source>
        <translation>połaczenie ftp do %1</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="586"/>
        <source>player link</source>
        <translation>połaczenie gracza</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="588"/>
        <source>channel link</source>
        <translation>połączenie kanału</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="590"/>
        <source>%1 link</source>
        <translation>%1 połączenie</translation>
    </message>
</context>
<context>
    <name>LogConfig</name>
    <message>
        <location filename="Log.cpp" line="79"/>
        <source>Toggle console for %1 events</source>
        <translation>Włącz konsolę dla zdarzeń: %1</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="80"/>
        <source>Toggle pop-up notifications for %1 events</source>
        <translation>Włącz powiadomienia dla zdarzeń: %1</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="81"/>
        <source>Toggle Text-To-Speech for %1 events</source>
        <translation>Włącz Tekst-Na-Mowę dla %1</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="82"/>
        <source>Click here to toggle sound notification for %1 events</source>
        <translation>Kliknij tutaj żeby włączyć powiadomienia dźwiękowe dla %1</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="83"/>
        <source>Path to sound file used for sound notifications in the case of %1 events&lt;br /&gt;Single click to play&lt;br /&gt;Double-click to change</source>
        <translation>Ścieżka do pliku dźwiękowego dla powiadomień dźwiękowych w przypadku wydarzeń typu %1&lt;br /&gt;Kliknięcie pojedyncze odtwarza dźwięk&lt;br /&gt;Kliknięcie podwójne zmienia plik</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="85"/>
        <source>Click here to toggle console output for %1 events.&lt;br /&gt;If checked, this option makes Mumble output all %1 events in its message log.</source>
        <translation>Kliknij tutaj, by przełączać stan wpisów w konsoli dla %1.&lt;br /&gt;Gdy zaznaczone Mumble będzie wyświetlać wszystkie %1 w logu.</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="86"/>
        <source>Click here to toggle pop-up notifications for %1 events.&lt;br /&gt;If checked, a notification pop-up will be created by Mumble for every %1 event.</source>
        <translation>Kliknij tutaj, by przełączać stan powiadomień dla %1.&lt;br /&gt;Gdy zaznaczone Mumble będzie pokazywać wszystkie %1 w obszarze powiadomień.</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="89"/>
        <source>Path to sound file used for sound notifications in the case of %1 events.&lt;br /&gt;Single click to play&lt;br /&gt;Double-click to change&lt;br /&gt;Ensure that sound notifications for these events are enabled or this field will not have any effect.</source>
        <translation>Ścieżka do pliku dźwiękowego użytego dla powiadomień dźwiękowych w przypadku wydarzeń typu %1&lt;br /&gt;Kliknięcie pojedyncze odtwarza dźwięk&lt;br /&gt;Kliknięcie podwójne zmienia plik&lt;br /&gt;Upewnij się, że powiadomienia tego typu wydarzeń są włączone inaczej powyższe ustawienia nie odniosą skutku.</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Click here to toggle Text-To-Speech for %1 events.&lt;br /&gt;If checked, Mumble uses Text-To-Speech to read %1 events out loud to you. Text-To-Speech is also able to read the contents of the event which is not true for soundfiles. Text-To-Speech and soundfiles cannot be used at the same time.</source>
        <translation type="obsolete">Kliknij tutaj, aby włączyć tekst na mowęi dla %1.&lt;br /&gt;Jeśli zaznaczone Mumble będzie używać tekstu na mowę do odczytania %1 na głos. Tekst na mowę i powiadomienia dźwiękowe nie mogą być uaktywnione razem.</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="87"/>
        <source>Click here to toggle Text-To-Speech for %1 events.&lt;br /&gt;If checked, Mumble uses Text-To-Speech to read %1 events out loud to you. Text-To-Speech is also able to read the contents of the event which is not true for sound files. Text-To-Speech and sound files cannot be used at the same time.</source>
        <translation>Kliknij tutaj, aby przełączać stan Tekstu-Na-Mowę dla %1.&lt;br /&gt;Gdy zaznaczone Mumble będzie używać Tekstu-Na-Mowę dla %1. Tekst-Na-Mowę jest również w stanie odczytywać zawartość zdarzeń które nie są przeznaczone dla plików dźwiękowych. Tekst-Na-Mowę nie może uktywny razem z być powiadomieniami dźwiękowymi..</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="88"/>
        <source>Click here to toggle sound notification for %1 events.&lt;br /&gt;If checked, Mumble uses a sound file predefined by you to indicate %1 events. Sound files and Text-To-Speech cannot be used at the same time.</source>
        <translation>Ścieżka do pliku użytego do powiadomień dźwiękowych w przypadku dla %1.&lt;br /&gt;Gdy zaznaczone, Mumble użyje dźwięku aby powiadomić o zdarzeniach typu %1. Plik dźwiękowe oraz Tekst-Na-Mowę nie mogą działać razem.</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Choose sound file</source>
        <translation type="obsolete">Wybierz plik dźwiękowy</translation>
    </message>
    <message>
        <location filename="Log.cpp" line="0"/>
        <source>Invalid sound file</source>
        <translation type="obsolete">Nieprawidłowy plik dźwiękowy</translation>
    </message>
    <message>
        <location filename="Log.ui" line="14"/>
        <source>Messages</source>
        <translation>Wiadomości</translation>
    </message>
    <message>
        <location filename="Log.ui" line="41"/>
        <source>Console</source>
        <translation>Konsola</translation>
    </message>
    <message>
        <location filename="Log.ui" line="0"/>
        <source>Enable console for %1</source>
        <translation type="obsolete">Uaktywnij konsolę dla %1</translation>
    </message>
    <message>
        <location filename="Log.ui" line="0"/>
        <source>Enable Text-To-Speech for %1</source>
        <translation type="obsolete">Uaktywnij tekst na mowę dla %1</translation>
    </message>
    <message>
        <location filename="Log.ui" line="69"/>
        <source>Text To Speech</source>
        <translation>Tekst na mowę</translation>
    </message>
    <message>
        <location filename="Log.ui" line="75"/>
        <source>Volume</source>
        <translation>Głośność</translation>
    </message>
    <message>
        <location filename="Log.ui" line="85"/>
        <source>Volume of Text-To-Speech Engine</source>
        <translation>Głośność tekstu na mowę</translation>
    </message>
    <message>
        <location filename="Log.ui" line="88"/>
        <source>&lt;b&gt;This is the volume used for the speech synthesis.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Głośność tekstu na mowę.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="Log.ui" line="113"/>
        <source>Length threshold</source>
        <translation>Długość</translation>
    </message>
    <message>
        <location filename="Log.ui" line="123"/>
        <source>Message length threshold for Text-To-Speech Engine</source>
        <translation>Długość wiadomości dla tekstu na mowę</translation>
    </message>
    <message>
        <location filename="Log.ui" line="126"/>
        <source>&lt;b&gt;This is the length threshold used for the Text-To-Speech Engine.&lt;/b&gt;&lt;br /&gt;Messages longer than this limit will not be read aloud in their full length.</source>
        <translation>&lt;b&gt;Ustala długość wiadomości odczytywanej przez tekst na mowę.&lt;/b&gt;&lt;br /&gt;Wiadomości większe niż ustalony limit nie będą odczytywane.</translation>
    </message>
    <message>
        <location filename="Log.ui" line="161"/>
        <source>Whisper</source>
        <translation>Szept</translation>
    </message>
    <message>
        <location filename="Log.ui" line="167"/>
        <source>If checked you will only hear whispers from users you added to your friend list.</source>
        <translation>Gdy zaznaczone będziesz słyszeć tylko szepty od użytkowników dodanych do twojej listy znajomych.</translation>
    </message>
    <message>
        <location filename="Log.ui" line="170"/>
        <source>Only accept whispers from friends</source>
        <translation>Akceptuj szepty tylko od znajomych</translation>
    </message>
    <message>
        <location filename="Log.ui" line="36"/>
        <source>Message</source>
        <translation>Wiadomość</translation>
    </message>
    <message>
        <location filename="Log.ui" line="46"/>
        <source>Notification</source>
        <translation>Powiadomienie</translation>
    </message>
    <message>
        <location filename="Log.ui" line="51"/>
        <source>Text-To-Speech</source>
        <translation>Tekst-Na-Mowę</translation>
    </message>
    <message>
        <location filename="Log.ui" line="56"/>
        <source>Soundfile</source>
        <translation>Plik dźwiękowy</translation>
    </message>
    <message>
        <location filename="Log.ui" line="61"/>
        <source>Path</source>
        <translation>Ścieżka do pliku dźwiękowego</translation>
    </message>
    <message>
        <location filename="Log.ui" line="132"/>
        <source> Characters</source>
        <translation> liter(y)</translation>
    </message>
</context>
<context>
    <name>LookConfig</name>
    <message>
        <location filename="LookConfig.ui" line="204"/>
        <source>Language</source>
        <translation>Język</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="157"/>
        <source>Look and Feel</source>
        <translation>Wygląd</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="63"/>
        <source>System default</source>
        <translation>Domyślny</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="214"/>
        <source>Language to use (requires restart)</source>
        <translation>Wybierz język (wymagany restart)</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="217"/>
        <source>&lt;b&gt;This sets which language Mumble should use.&lt;/b&gt;&lt;br /&gt;You have to restart Mumble to use the new language.</source>
        <translation>&lt;b&gt;Wybiera który język będzie używany.&lt;/b&gt;&lt;br /&gt;Będziesz musiał zrestartować Mumble by używać nowego języka.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="163"/>
        <source>Style</source>
        <translation>Styl okienek</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="20"/>
        <source>Layout</source>
        <translation>Ułożenie</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="32"/>
        <source>Classic</source>
        <translation>Klasyczny</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="51"/>
        <source>Stacked</source>
        <translation>Stos</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="105"/>
        <source>Hybrid</source>
        <translation>Hybryda</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="124"/>
        <source>Custom</source>
        <translation>Własny</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="367"/>
        <source>This changes the behavior when moving channels.</source>
        <translation>Zmienia zachowanie podczas przenoszenia kanałów.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="370"/>
        <source>This sets the behavior of channel drags; it can be used to prevent accidental dragging. &lt;i&gt;Move&lt;/i&gt; moves the channel without prompting. &lt;i&gt;Do Nothing&lt;/i&gt; does nothing and prints an error message. &lt;i&gt;Ask&lt;/i&gt; uses a message box to confirm if you really wanted to move the channel.</source>
        <translation>Zmienia zachowanie przeciągania kanałów, może zostać użyte by zapobiec przypadkowemu przeciąganiu. &lt;i&gt;Przenieś&lt;/i&gt; przenosi kanał bez powiadomienia. &lt;i&gt;Nic nie rób&lt;/i&gt; nic nie robi i wyświetla wiadomość z błędem. &lt;i&gt;Pytaj&lt;/i&gt; używa powiadomienia tekstowego, by upewnić się czy na pewno chciałeś przenieść kanał.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="170"/>
        <source>Basic widget style</source>
        <translation>Styl okienek</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="173"/>
        <source>&lt;b&gt;This sets the basic look and feel to use.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Ustawia podstawowy wygląd okienek.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="180"/>
        <source>Skin</source>
        <translation>Skórka</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="187"/>
        <source>Skin file to use</source>
        <translation>Plik skórki</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="224"/>
        <source>Apply some high contrast optimizations for visually impaired users</source>
        <translation>Zastosuj optymalizacje wysokiego kontrastu dla osób niedowidzących</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="227"/>
        <source>Optimize for high contrast</source>
        <translation>Optymalizuj dla wysokiego kontrastu</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="250"/>
        <source>Application</source>
        <translation>Aplikacja</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>Check to show chat bar</source>
        <translation type="obsolete">Wyświetlaj pasek czatu</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>&lt;b&gt;If checked the chat bar is shown.&lt;/b&gt;&lt;br /&gt;Uncheck this to hide it.</source>
        <translation type="obsolete">&lt;b&gt;Jeśli zaznaczone pasek czatu będzie widoczny.&lt;/b&gt;&lt;br /&gt;Odznacz, jeśli chcesz go ukryć.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>Show chatbar</source>
        <translation type="obsolete">Wyświetlaj pasek czatu</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="293"/>
        <source>Adds user and channel context menus into the menu bar</source>
        <translation>Dodaje menu kontekstowe do głównego paska menu</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="319"/>
        <source>Tray Icon</source>
        <translation>Ikona w pasku zadań</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="354"/>
        <source>Channel Tree</source>
        <translation>Drzewo kanałów</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="407"/>
        <source>Show number of users in each channel</source>
        <translation>Wyświetlaj liczbę użytkowników na każdym kanale</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="410"/>
        <source>Show channel user count</source>
        <translation>Wyświetlaj liczbę użytkowników na kanałach</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>List players above subchannels (requires restart).</source>
        <translation type="obsolete">Listuj użytkowników nad kanałem (wymaga restartu).</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="77"/>
        <source>User Interface</source>
        <translation>Interfejs</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="197"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="204"/>
        <source>Choose skin file</source>
        <translation>Wybierz plik ze skórką</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="0"/>
        <source>&lt;b&gt;If set, players will be shown above subchannels in the channel view.&lt;/b&gt;&lt;br /&gt;A restart of Mumble is required to see the change.</source>
        <translation type="obsolete">&lt;b&gt;Użytkownicy będą listowani nad kanałem (wymaga restartu).</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="0"/>
        <source>Players above Channels</source>
        <translation type="obsolete">Wyświetlaj nazwy użytkowników nad nazwą kanału</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="190"/>
        <source>&lt;b&gt;This sets which skin Mumble should use.&lt;/b&gt;&lt;br /&gt;The skin is a style file applied on top of the basic widget style. If there are icons in the same directory as the style sheet, those will replace the default icons.</source>
        <translation>&lt;b&gt;Ustawia jakiej skórki powinien używać Mumble.&lt;/b&gt;&lt;br /&gt;Skórka to plik ze stylem, który jest nakładany na domyślny styl aplikacji. Jeżeli w folderze skórki znajdują się ikony zastąpią one standardowy zestaw ikon.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="14"/>
        <source>Form</source>
        <translation>Formularz</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>New version check</source>
        <translation type="obsolete">Aktualizacje programu</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>Check for updates on startup</source>
        <translation type="obsolete">Sprawdzaj, czy istnieje nowsza wersja Mumble przy starcie</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="67"/>
        <source>None</source>
        <translation>Żadne</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="0"/>
        <source>Only with players</source>
        <translation type="obsolete">rozwijaj tylko te kanały, na których są użytkownicy</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="69"/>
        <source>All</source>
        <translation>Wszystkie</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="377"/>
        <source>Expand</source>
        <translation>Rozwijanie kanałów</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="384"/>
        <source>When to automatically expand channels</source>
        <translation>Kiedy automatycznie rozwijać kanały</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>This sets which channels to automatically expand. &lt;i&gt;None&lt;/i&gt; and &lt;i&gt;All&lt;/i&gt; will expand no or all channels, while &lt;i&gt;Only with players&lt;/i&gt; will expand and collapse channels as players join and leave them.</source>
        <translation type="obsolete">Ta opcja ustawia, które kanały powinny być automatycznie rozwijane.</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="68"/>
        <source>Only with users</source>
        <translation>Tylko z użytkownikami</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="71"/>
        <source>Ask</source>
        <translation>Pytaj</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="72"/>
        <source>Do Nothing</source>
        <translation>Nie rób nic</translation>
    </message>
    <message>
        <location filename="LookConfig.cpp" line="73"/>
        <source>Move</source>
        <translation>Przenieś</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="360"/>
        <source>Channel Dragging</source>
        <translation>Przeciąganie kanałów</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>This changes the behaviour when moving channels.</source>
        <translation type="obsolete">Ta opcja zmienia zachowanie kiedy przenosisz kanał.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>This sets the behaviour of channel drags, it can be used to prevent accidental dragging. &lt;i&gt;Move Channel&lt;/i&gt; moves the channel without prompting. &lt;i&gt;Do Nothing&lt;/i&gt; does nothing and prints an error message. &lt;i&gt;Ask&lt;/i&gt; uses a message box to confirm if you really wanted to move the channel.</source>
        <translation type="obsolete">Ogranicza możliwość przypadkowego przestawienia układu kanałów.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="303"/>
        <source>Ask whether to close or minimize when quitting Mumble.</source>
        <translation>Mumble będzie pytać czy chcesz zamknąć czy zminimalizować program.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>&lt;b&gt;If set, will verify you want to quit if connected.&lt;b&gt;</source>
        <translation type="obsolete">&lt;b&gt;Jeśli ta opcja jest zaznaczona to zobaczysz komunikat czy rzeczywiście chcesz zamknąć Mumble (abyś przypadkiem nie zamknął programu), ujrzysz go tylko wtedy, gdy jesteś aktualnie połączony z jakimś serwerem.&lt;b&gt;</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="309"/>
        <source>Ask on quit while connected</source>
        <translation>Ostrzegaj przed zamknięciem programu</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>Make the Mumble window appear on top of other windows.</source>
        <translation type="obsolete">Okno Mumble wyświetlane zawsze na wierzchu.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>&lt;b&gt;This makes the Mumble window a topmost window.&lt;/b&gt;</source>
        <translation type="obsolete">&lt;b&gt;Sprawia, że okno Mumble jest zawsze na pierwszym planie.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="256"/>
        <source>Always On Top</source>
        <translation>Zawsze na wierzchu</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="328"/>
        <source>&lt;b&gt;If set, minimizing the Mumble main window will cause it to be hidden and accessible only from the tray. Otherwise, it will be minimized as a window normally would.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Gdy zaznaczysz, minimalizacja głównego okna Mumble sprawi, że okno zostanie ukryte a dostęp do niego będzie możliwy tylko po przez ikonę w zasobniku systemowym. Jeżeli opcja jest niezaznaczona, minimalizacja Mumble ukryje okno w normalny sposób (na pasku zadań).&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="387"/>
        <source>This sets which channels to automatically expand. &lt;i&gt;None&lt;/i&gt; and &lt;i&gt;All&lt;/i&gt; will expand no or all channels, while &lt;i&gt;Only with users&lt;/i&gt; will expand and collapse channels as users join and leave them.</source>
        <translation>Określa, kiedy kanały mają być automatycznie rozwijane. &lt;i&gt;Żadne&lt;/i&gt; i &lt;i&gt;Wszystkie&lt;/i&gt; - Żaden kanał lub wszystkie kanały będą rozwijane. &lt;i&gt;Tylko z użytkownikami&lt;/i&gt; - rozwija i zwija kanały na których znajdują się użytkownicy.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="394"/>
        <source>List users above subchannels (requires restart).</source>
        <translation>Nazwy użytkowników będą wyświetlane ponad kanałami (wymaga restartu).</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="397"/>
        <source>&lt;b&gt;If set, users will be shown above subchannels in the channel view.&lt;/b&gt;&lt;br /&gt;A restart of Mumble is required to see the change.</source>
        <translation>&lt;b&gt;Nazwy użytkowników będą wyświetlane ponad pod-kanałami w widoku kanałów.&lt;/b&gt;&lt;br /&gt;Restart Mumble jest wymagany, aby zobaczyć zmiany.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="400"/>
        <source>Users above Channels</source>
        <translation>Wyświetlaj nazwy użytkowników ponad pod-kanałami</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="306"/>
        <source>&lt;b&gt;If set, will verify you want to quit if connected.&lt;/b&gt;</source>
        <translation>&lt;b&gt;Jeżeli ustawione, program będzie sprawdzać czy chcesz go zamknąć, gdy jesteś na serwerze.&lt;/b&gt;</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="331"/>
        <source>Hide in tray when minimized</source>
        <translation>Ukryj w zasobniku systemowym podczas minimalizacji</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>Show all configuration items</source>
        <translation type="obsolete">Pokazuj wszystkie pozycje do skonfigurowania</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>&lt;b&gt;This will show all configuration items.&lt;/b&gt;&lt;br /&gt;Mumble contains a lot of configuration items that most users won&apos;t need to change. Checking this will show all configurable items.</source>
        <translation type="obsolete">&lt;b&gt;Pokazuj wszystkie opcje programu.&lt;/b&gt; Większość użytkowników Mumble i tak nie zmienia tych ustawień, uaktywnij tą opcję aby zobaczyć wszystkie funkcje programu.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="0"/>
        <source>Expert Config</source>
        <translation type="obsolete">Zaawansowana konfiguracja</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="325"/>
        <source>Hide the main Mumble window in the tray when it is minimized.</source>
        <translation>Ukryj Mumble w zasobniku systemowym, gdy główne okno zostanie zminimalizowane.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="263"/>
        <source>This setting controls when the application will be always on top.</source>
        <translation>Określa kiedy aplikacja ma pozostawać zawsze na wierzchu.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="266"/>
        <source>This setting controls in which situations the application will stay always on top. If you select &lt;i&gt;Never&lt;/i&gt; the application will not stay on top. &lt;i&gt;Always&lt;/i&gt; will always keep the application on top. &lt;i&gt;In minimal view&lt;/i&gt; / &lt;i&gt;In normal view&lt;/i&gt; will only keep the application always on top when minimal view is activated / deactivated.</source>
        <translation>Określa w jakich sytuacjach aplikacją pozostanie zawsze na wierzchu. Jeżeli wybierzesz &lt;i&gt;Nigdy&lt;/i&gt; aplikacja nie zostanie na wierzchu. &lt;i&gt;Zawsze&lt;/i&gt; bedzie utrzymywać aplikację na wierzchu cały czas. &lt;i&gt;W widoku minimalnym&lt;/i&gt; / &lt;i&gt;W widoku nomalnym&lt;/i&gt; aplikacja pozostanie zawsze na wierzchu tylko gdy widok minimalny będzie włączony/wyłączony.</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="270"/>
        <source>Never</source>
        <translation>Nigdy</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="275"/>
        <source>Always</source>
        <translation>Zawsze</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="280"/>
        <source>In minimal view</source>
        <translation>W widoku minimalnym</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="285"/>
        <source>In normal view</source>
        <translation>W widoku normalnym</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="338"/>
        <source>Displays talking status in system tray</source>
        <translation>Wyświetla status mowy</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="344"/>
        <source>Show talking status in tray icon</source>
        <translation>Wyświetlaj status mowy</translation>
    </message>
    <message>
        <location filename="LookConfig.ui" line="296"/>
        <source>Show context menu in menu bar</source>
        <translation>Wyświetlaj menu kontekstowe w głównym pasku menu</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="MainWindow.cpp" line="1988"/>
        <source>Root</source>
        <translation>Źródło</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="198"/>
        <source>&amp;Connect</source>
        <translation>&amp;Połącz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="201"/>
        <source>Open the server connection dialog</source>
        <translation>Wyświetl listę serwerów</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Shows a dialog of registered servers, and also allows quick connect.</source>
        <translation type="obsolete">Pokazuje serwery zarejestrowane, pozwala na szybkie dołączenie.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="215"/>
        <source>&amp;Disconnect</source>
        <translation>&amp;Rozłącz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="218"/>
        <source>Disconnect from server</source>
        <translation>Rozłącz od serwera</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="221"/>
        <source>Disconnects you from the server.</source>
        <translation>Rozłącza cię od serwera.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="229"/>
        <source>&amp;Ban lists</source>
        <translation>&amp;Lista banów</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="232"/>
        <source>Edit ban lists on server</source>
        <translation>Edycja listy banów z serwera</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="235"/>
        <source>This lets you edit the server-side IP ban lists.</source>
        <translation>Pozwala na edycję listy zbanowanych IP.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="261"/>
        <source>&amp;Kick</source>
        <translation>&amp;Kopnij</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Kick player (with reason)</source>
        <translation type="obsolete">Wyrzuć użytkownika (podaj powód)</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Kick selected player off server. You&apos;ll be asked to specify a reason.</source>
        <translation type="obsolete">Wyrzuca użytkownika z serwera.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="286"/>
        <source>&amp;Ban</source>
        <translation>&amp;Banuj</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Kick and ban player (with reason)</source>
        <translation type="obsolete">Wyrzuć i zablokuj dostęp (podaj powód)</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Kick and ban selected player from server. You&apos;ll be asked to specify a reason.</source>
        <translation type="obsolete">Blokuje dostęp do serwera temu użytkownikowi.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="275"/>
        <source>&amp;Mute</source>
        <translation>&amp;Wycisz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Mute player</source>
        <translation type="obsolete">Wycisz użytkownika</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Mute or unmute player on server. Unmuting a deafened player will also undeafen them.</source>
        <translation type="obsolete">Wycisza użytkownika na serwerze.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="300"/>
        <source>&amp;Deafen</source>
        <translation>&amp;Ogłusz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Deafen player</source>
        <translation type="obsolete">Wycisz słuchawki i mikrofon użytkownika</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Deafen or undeafen player on server. Deafening a player will also mute them.</source>
        <translation type="obsolete">Wycisz słuchawki i mikrofon użytkownika na serwerze.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="314"/>
        <source>&amp;Local Mute</source>
        <translation>&amp;Wycisz lokalnie</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="336"/>
        <source>&amp;Add</source>
        <translation>&amp;Dodaj</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="339"/>
        <source>Add new channel</source>
        <translation>Dodaj nowy kanał</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="342"/>
        <source>This adds a new sub-channel to the currently selected channel.</source>
        <translation>Dodaje nowy pod-kanał w aktualnie wskazanym kanale.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="347"/>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="350"/>
        <source>Remove channel</source>
        <translation>Usuń kanał</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="353"/>
        <source>This removes a channel and all sub-channels.</source>
        <translation>Usuwa kanał wraz ze wszystkimi pod-kanałami.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&amp;Edit ACL</source>
        <translation type="obsolete">&amp;Edytuj ACL</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="361"/>
        <source>Edit Groups and ACL for channel</source>
        <translation>Edytuj grupy oraz reguły ACL kanału</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="364"/>
        <source>This opens the Group and ACL dialog for the channel, to control permissions.</source>
        <translation>Otwiera okno dialogowe z grupami oraz regułami ACL, które pozwala na edycję uprawnień.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&amp;Rename</source>
        <translation type="obsolete">&amp;Zmień nazwę</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&amp;Change Description</source>
        <translation type="obsolete">Z&amp;mień opis</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Changes the channel description</source>
        <translation type="obsolete">Zmienia opis kanału</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>This changes the description of a channel.</source>
        <translation type="obsolete">Ta opcja zmienia opis kanału.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="369"/>
        <source>&amp;Link</source>
        <translation>&amp;Połącz kanały</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="372"/>
        <source>Link your channel to another channel</source>
        <translation>Połącz swój kanał z innym kanałem</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>This links your current channel to the selected channel. If they have permission to speak in the other channel, players can now hear each other. This is a permanent link, and will last until manually unlinked or the server is restarted. Please see the shortcuts for push-to-link.</source>
        <translation type="obsolete">Ta opcja łączy obecny kanał z zaznaczonym kanałem.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="383"/>
        <source>Unlink your channel from another channel</source>
        <translation>Rozłącz swój kanał od innego kanału</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="386"/>
        <source>This unlinks your current channel from the selected channel.</source>
        <translation>Rozłącza bieżący kanał od wskazanego kanału.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Unlink &amp;All</source>
        <translation type="obsolete">&amp;Rozłącz wszystkie kanały</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="394"/>
        <source>Unlinks your channel from all linked channels.</source>
        <translation>Rozłącza twój kanał od wszystkich kanałów z nim połączonych.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="397"/>
        <source>This unlinks your current channel (not the selected one) from all linked channels.</source>
        <translation>Rozłącza twój obecny kanał (nie ten wybrany) od wszystkich kanałów z nim połączonych.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="402"/>
        <source>&amp;Reset</source>
        <translation>&amp;Resetuj sprzęt audio</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="405"/>
        <source>Reset audio preprocessor</source>
        <translation>Resetuj preprocessor audio</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="408"/>
        <source>This will reset the audio preprocessor, including noise cancellation, automatic gain and voice activity detection. If something suddenly worsens the audio environment (like dropping the microphone) and it was temporary, use this to avoid having to wait for the preprocessor to readjust.</source>
        <translation>Resetuje preprocessor audio, wliczając w to usuwanie echa oraz wykrywanie mowy. Jeżeli coś Ci nagle pogarsza dźwięk i jest to stan przejściowy, użyj tej opcji by nie czekać na automatyczą rekonfigurację preprocesora.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="422"/>
        <source>&amp;Mute Self</source>
        <translation>&amp;Wycisz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="425"/>
        <source>Mute yourself</source>
        <translation>Wycisz mikrofon</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="428"/>
        <source>Mute or unmute yourself. When muted, you will not send any data to the server. Unmuting while deafened will also undeafen.</source>
        <translation>Wycisza lub wyłącza wyciszenie. Gdy jesteś wyciszony nie wysyłasz żadnych danych na serwer. Wyłączenie wyciszenia również wyłącza ogłuszenie.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="445"/>
        <source>&amp;Deafen Self</source>
        <translation>&amp;Ogłusz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="448"/>
        <source>Deafen yourself</source>
        <translation>Ogłusz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="451"/>
        <source>Deafen or undeafen yourself. When deafened, you will not hear anything. Deafening yourself will also mute.</source>
        <translation>Ogłusza lub wyłącza ogłuszenie. Gdy jesteś ogłuszony nie będziesz nic słyszał. Ogłuszenie samego siebie włącza również wyciszenie mikrofonu.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="462"/>
        <source>&amp;Text-To-Speech</source>
        <translation>&amp;Tekst-Na-Mowę</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="465"/>
        <source>Toggle Text-To-Speech</source>
        <translation>Włącz/Wyłącz Tekst-Na-Mowę</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="468"/>
        <source>Enable or disable the text-to-speech engine. Only messages enabled for TTS in the Configuration dialog will actually be spoken.</source>
        <translation>Włącza lub wyłącza Tekst-Na-Mowę. Tylko wiadomości z włączoną obsługą Tekstu-Na-Mowę zostaną przeczytane na głos.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>S&amp;tatistics</source>
        <translation type="obsolete">S&amp;tatystyki</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="476"/>
        <source>Display audio statistics</source>
        <translation>Wyświetla statystyki audio</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="479"/>
        <source>Pops up a small dialog with information about your current audio input.</source>
        <translation>Wyświetla informacje o twoim wejściu audio.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="487"/>
        <source>Forcibly unlink plugin</source>
        <translation>Wymuś rozłączenie wtyczki</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="490"/>
        <source>This forces the current plugin to unlink, which is handy if it is reading completely wrong data.</source>
        <translation>Wymusza rozłączenie bieżącej wtyczki, przydatne jeżeli odczytuje ona całkowicie złe dane.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="499"/>
        <source>&amp;Settings</source>
        <translation>&amp;Konfiguracja</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="502"/>
        <source>Configure Mumble</source>
        <translation>Konfiguracja</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="505"/>
        <source>Allows you to change most settings for Mumble.</source>
        <translation>Pozwala na zmianę większości ustawień Mumble.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="527"/>
        <source>&amp;What&apos;s This?</source>
        <translation>&amp;Co to jest?</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="530"/>
        <source>Enter What&apos;s This? mode</source>
        <translation>Wejdź w tryb &quot;Co to jest?&quot;</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="533"/>
        <source>Click this to enter &quot;What&apos;s This?&quot; mode. Your cursor will turn into a question mark. Click on any button, menu choice or area to show a description of what it is.</source>
        <translation>Uaktywnia tryb &quot;Co to jest?&quot;. Klikaj kursorem na poszczególne elementy interfejsu, aby dowiedzieć się do czego służą.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="538"/>
        <source>&amp;About</source>
        <translation>O &amp;programie</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="541"/>
        <source>Information about Mumble</source>
        <translation>Informacje na temat Mumble</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="544"/>
        <source>Shows a small dialog with information and license for Mumble.</source>
        <translation>Wyświetla małe okno z informacjami o licencji Mumble.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="552"/>
        <source>About &amp;Speex</source>
        <translation>O &amp;Speex</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="555"/>
        <source>Information about Speex</source>
        <translation>Informacje na temat Speex</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="558"/>
        <source>Shows a small dialog with information about Speex.</source>
        <translation>Wyświetla małe okno z informacjami na temat Speex.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="569"/>
        <source>Information about Qt</source>
        <translation>Informacje na temat Qt</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="572"/>
        <source>Shows a small dialog with information about Qt.</source>
        <translation>Wyświetla małe okno z informacjami na temat Qt.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="580"/>
        <source>Check for &amp;Updates</source>
        <translation>Sprawdź dostępność &amp;aktualizacji</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="583"/>
        <source>Check for new version of Mumble</source>
        <translation>Sprawdź czy jest nowa wersja Mumble</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="586"/>
        <source>Connects to the Mumble webpage to check if a new version is available, and notifies you with an appropriate download URL if this is the case.</source>
        <translation>Łączy się ze stroną Mumble by sprawdzić czy jest dostępna nowsza wersja, następnie powiadamia użytkownika odpowiednim adresem URL gdy jest tak potrzeba.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="753"/>
        <source>&amp;Change Comment</source>
        <translation>&amp;Edytuj komentarz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Change the comment on the selected user.</source>
        <translation type="obsolete">Edytuj komentarz wybranemu użytkownikowi.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>This allows you to change the comment (shown as a tooltip) of a user. Unless you&apos;ve been given extra privileges on the server, you can only change your own comment.</source>
        <translation type="obsolete">Pozwala na zmianę komentarza (wyświetlanego jako podpowiedź) użytkownika. Jeżeli nie masz przydzielonych specjalnych uprawnień na serwerze, możesz edytować tylko swój komentarz.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Certificate Wizard</source>
        <translation type="obsolete">Kreator certyfikatów</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="633"/>
        <source>Configure certificates for strong authentication</source>
        <translation>Konfiguruj certyfikaty dla silnej autoryzacji</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="636"/>
        <source>This starts the wizard for creating, importing and exporting certificates for authentication against servers.</source>
        <translation>Uruchamia kreator umożliwiający tworzenie, importowanie i eksportowanie certyfikatów uwierzytelniających na serwerach.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Register</source>
        <translation type="obsolete">Zarejestruj</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="644"/>
        <source>Register user on server</source>
        <translation>Rejestruje użytkownika na serwerze</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="647"/>
        <source>This will permanently register the user on the server.</source>
        <translation>Stałe rejestruje użytkownika na serwerze.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="652"/>
        <source>Add &amp;Friend</source>
        <translation>Dodaj &amp;znajomego</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="655"/>
        <source>Adds a user as your friend.</source>
        <translation>Dodaje użytkownika do znajomych.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="658"/>
        <source>This will add the user as a friend, so you can recognize him on this and other servers.</source>
        <translation>Dodaje użytkownika do twojej listy znajomych, abyś w przyszłości mógł rozpoznać go na tym oraz innych serwerach.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="663"/>
        <source>&amp;Remove Friend</source>
        <translation>&amp;Usuń znajomego</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="666"/>
        <source>Removes a user from your friends.</source>
        <translation>Usuwa użytkownika z listy znajomych.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="669"/>
        <source>This will remove a user from your friends list.</source>
        <translation>Usuwa użytkownika z twojej listy znajomych.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="674"/>
        <source>&amp;Update Friend</source>
        <translation>&amp;Aktualizuj znajomego</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="677"/>
        <source>Update name of your friend.</source>
        <translation>Aktualizuje nazwę twojego znajomego.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="680"/>
        <source>Your friend uses a different name than what is in your database. This will update the name.</source>
        <translation>Twój znajomy używa innej nazwy niż ta która jest zapisana w twojej bazie danych. Uaktualnia tą nazwę.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="685"/>
        <source>Registered &amp;Users</source>
        <translation>&amp;Użytkownicy</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="688"/>
        <source>Edit registered users list</source>
        <translation>Edytuj listę zarejestrowanych użytkowników</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="691"/>
        <source>This opens the editor for registered users, which allow you to change their name or unregister them.</source>
        <translation>Otwiera edytor zarejestrowanych użytkowników, pozwala on na edycję nazw oraz wyrejestrowanie użytkowników.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Change Texture</source>
        <translation type="obsolete">Zmień awatar</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Change your overlay texture on this server</source>
        <translation type="obsolete">Zmienia twoją teksturę widoczną na nakładce na tym serwerze</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="704"/>
        <source>&amp;Access Tokens</source>
        <translation>&amp;Hasła dostępu</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="707"/>
        <source>Add or remove text-based access tokens</source>
        <translation>Dodaje lub usuwa hasła dostępu</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Remove Texture</source>
        <translation type="obsolete">Usuń awatar</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Remove currently defined user texture.</source>
        <translation type="obsolete">Usuwa obecną teksturę z nakładki.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2196"/>
        <source>Mumble -- %1</source>
        <translation>Mumble -- %1</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="114"/>
        <source>This shows all recent activity. Connecting to servers, errors and information messages all show up here.&lt;br /&gt;To configure exactly which messages show up here, use the &lt;b&gt;Settings&lt;/b&gt; command from the menu.</source>
        <translation>Dziennik wyświetla wszystkie ostatnie wydarzenia takie jak: próby połączenia z serwerem, błędy oraz wiadomości użytkowników.&lt;br /&gt;Możesz dowolnie konfigurować okno dziennika w &lt;b&gt;Konfiguracja&lt;/b&gt;.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&amp;Server</source>
        <translation type="obsolete">&amp;Serwer</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&amp;Player</source>
        <translation type="obsolete">&amp;Użytkownik</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="165"/>
        <source>&amp;Channel</source>
        <translation>&amp;Kanał</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>&amp;Audio</source>
        <translation type="obsolete">&amp;Dźwięk</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="59"/>
        <source>C&amp;onfigure</source>
        <translation>&amp;Opcje</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="65"/>
        <source>&amp;Help</source>
        <translation>&amp;Pomoc</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Kicking player %1</source>
        <translation type="obsolete">Wykopywanie użytkownika %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1211"/>
        <source>Enter reason</source>
        <translation>Podaj powód</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Banning player %1</source>
        <translation type="obsolete">Banowanie użytkownika %1</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="14"/>
        <source>Mumble</source>
        <translation>Mumble</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="201"/>
        <source>Push and hold this button to send voice.</source>
        <comment>Global Shortcut</comment>
        <translation>Naciśnij i przytrzymaj ten przycisk, aby transmitować głos.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="202"/>
        <source>This configures the push-to-talk button, and as long as you hold this button down, you will transmit voice.</source>
        <comment>Global Shortcut</comment>
        <translation>Wyświetla twój status PTT, w zależności jak długo będziesz trzymać przycisk, tak długo będziesz transmitować swój głos.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Toggle self-mute status.</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Włącz tryb wyciszenia mikrofonu</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>This will toggle your muted status. If you toggle this off, you will also disable self-deafen.</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Ta opcja pokaże twój status wyciszenia. Jeśli wyłączysz tą opcję zablokujesz wyciszenie słuchawek i mikrofonu.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Toggle self-deafen status.</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Włącz tryb wyciszenia słuchawek</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="229"/>
        <source>Toggle state of in-game overlay.</source>
        <comment>Global Shortcut</comment>
        <translation>Włącz tryb nakładki w grze.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>This will switch the states of the ingame overlay between showing everybody, just the players who are talking, and nobody.</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Ta opcja zmieni tryb nakładki w grze trzema dostępnymi trybami.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Channel Name</source>
        <translation type="obsolete">Podaj nazwę kanału:</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Change description of channel %1</source>
        <translation type="obsolete">Zmień opis kanału %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1654"/>
        <source>Unmuted and undeafened.</source>
        <translation>Wyłączono ogłuszenie oraz wyciszenie mikrofonu.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1656"/>
        <source>Unmuted.</source>
        <translation>Wyłączono wyciszenie mikrofonu.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1658"/>
        <source>Muted.</source>
        <translation>Wyciszono.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1682"/>
        <source>Muted and deafened.</source>
        <translation>Ogłuszono oraz wyciszono mikrofon.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1684"/>
        <source>Deafened.</source>
        <translation>Ogłuszono.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1686"/>
        <source>Undeafened.</source>
        <translation>Wyłączono ogłuszenie.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1753"/>
        <source>About Qt</source>
        <translation>O Qt</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Joining %1.</source>
        <translation type="obsolete">Dołączam %1.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2161"/>
        <source>Server connection failed: %1.</source>
        <translation>Połączenie z serwerem zostało przerwane z powodu: %1.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2163"/>
        <source>Disconnected from server.</source>
        <translation>Rozłączony od serwera.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="812"/>
        <source>Reconnecting.</source>
        <translation>Ponowne łączenie.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Joined server: %1.</source>
        <translation type="obsolete">%1 dołączył do serwera.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>the server</source>
        <translation type="obsolete">serwer</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="285"/>
        <source>You were muted and deafened by %1.</source>
        <translation>Zostałeś ogłuszony oraz wyciszony przez %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="287"/>
        <source>You were unmuted and undeafened by %1.</source>
        <translation>%1 wyłączył twoje ogłuszenie oraz wyciszenie.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>You were suppressed by %1.</source>
        <translation type="obsolete">Zostałeś wyciszony przez %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="309"/>
        <source>You were unsuppressed by %1.</source>
        <translation>%1 zezwolił na mowę.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="316"/>
        <source>You muted and deafened %1.</source>
        <translation>Ogłuszyłeś oraz wyciszyłeś %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="318"/>
        <source>You unmuted and undeafened %1.</source>
        <translation>Wyłączyłeś ogłuszenie oraz wyciszenie %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="322"/>
        <source>You muted %1.</source>
        <translation>Wyciszyłeś %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="324"/>
        <source>You unmuted %1.</source>
        <translation>Wyłączyłeś wyciszenie %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="329"/>
        <source>You undeafened %1.</source>
        <translation>Wyłączyłeś ogłuszenie %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="336"/>
        <source>You suppressed %1.</source>
        <translation>Wyciszyłeś %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="338"/>
        <source>You unsuppressed %1.</source>
        <translation>Wyłączyłeś wyciszenie %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="343"/>
        <source>%1 muted and deafened by %2.</source>
        <translation>%1 został ogłuszony oraz wyciszony przez %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="345"/>
        <source>%1 unmuted and undeafened by %2.</source>
        <translation>%2 wyłączył ogłuszenie oraz wyciszenie %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="363"/>
        <source>%1 suppressed by %2.</source>
        <translation>%1 został pozbawiony możliwości mowy przez %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="365"/>
        <source>%1 unsuppressed by %2.</source>
        <translation>%1 może ponownie mówić dzięki: %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="388"/>
        <source>%1 moved to %2.</source>
        <translation>%1 przeniósł się do kanału %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="390"/>
        <source>%1 moved to %2 by %3.</source>
        <translation>%1 został przeniesiony do kanału %2 przez %3.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="400"/>
        <source>%1 moved in from %2 by %3.</source>
        <translation>%1 został przeniesiony z kanału %2 przez %3.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="446"/>
        <source>%1 disconnected.</source>
        <translation>%1 rozłączony.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="537"/>
        <source>(Tree) </source>
        <translation>(Do drzewa kanałów) </translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="539"/>
        <source>(Channel) </source>
        <translation>(Do kanału) </translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="542"/>
        <source>%2%1: %3</source>
        <translation>%2%1: %3</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>Left server: %1.</source>
        <translation type="obsolete">%1 opuścił serwer.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>the server</source>
        <comment>message from</comment>
        <translation type="obsolete">serwera</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="678"/>
        <source>Unable to find matching CELT codecs with other clients. You will not be able to talk to all users.</source>
        <translation>Nie udało się odnaleźć pasujących kodeków CELT. Nie będziesz mógł rozmawiać do wszystkich użytkowników.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="266"/>
        <source>%1 is now muted and deafened.</source>
        <translation>%1 jest teraz ogłuszony oraz wyciszony.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="136"/>
        <source>Welcome message: %1</source>
        <translation>Wiadomość powitalna: %1</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="129"/>
        <source>Mumble: %1</source>
        <translation>Mumble: %1</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="157"/>
        <source>You were denied %1 privileges in %2.</source>
        <translation>Nie posiadasz uprawnienia: &lt;i&gt;%1&lt;/i&gt; w %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="159"/>
        <source>%3 was denied %1 privileges in %2.</source>
        <translation>%3 nie posiada uprawnienia: &lt;i&gt;%1&lt;/i&gt; w %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="163"/>
        <source>Denied: Cannot modify SuperUser.</source>
        <translation>Odmowa: Nie można modyfikować SuperUser&apos;a.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="167"/>
        <source>Denied: Invalid channel name.</source>
        <translation>Odmowa: Nieprawidłowa nazwa kanału.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="171"/>
        <source>Denied: Text message too long.</source>
        <translation>Odmowa: Wiadomość tekstowa jest zbyt długa.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="191"/>
        <source>Denied: Operation not permitted in temporary channel.</source>
        <translation>Odmowa: Operacja niedozwolona na kanale tymczasowym.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="198"/>
        <source>You need a certificate to perform this operation.</source>
        <translation>Potrzebujesz certyfikatu, aby wykonać tą operację.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="200"/>
        <source>%1 does not have a certificate.</source>
        <translation>%1 nie ma certyfikatu.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="205"/>
        <source>Invalid username: %1.</source>
        <translation>Niepoprawna nazwa użytkownika: %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="207"/>
        <source>Invalid username.</source>
        <translation>Niepoprawna nazwa użytkownika.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="211"/>
        <source>Channel is full.</source>
        <translation>Kanał jest pełny.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="218"/>
        <source>Permission denied.</source>
        <translation>Brak dostępu.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="255"/>
        <source>%1 connected.</source>
        <translation>%1 połączony.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="268"/>
        <source>%1 is now muted.</source>
        <translation>%1 jest teraz wyciszony.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="270"/>
        <source>%1 is now unmuted.</source>
        <translation>%1 nie jest już wyciszony.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>server</source>
        <translation type="obsolete">Serwer</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="291"/>
        <source>You were muted by %1.</source>
        <translation>Zostałeś wyciszony przez %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="293"/>
        <source>You were unmuted by %1.</source>
        <translation>%1 wyłączył twoje wyciszenie mikrofonu.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="304"/>
        <source>You were suppressed.</source>
        <translation>Zostałeś pozbawiony możliwości mowy.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="307"/>
        <source>You were unsuppressed.</source>
        <translation>Możliwość mowy została przywrócona.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="349"/>
        <source>%1 muted by %2.</source>
        <translation>%2 wyciszył mikrofon %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="351"/>
        <source>%1 unmuted by %2.</source>
        <translation>%2 wyłączył wyciszenie mikrofonu %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>You were deafened by %1.</source>
        <translation type="obsolete">Twoje słuchawki i mikrofon zostały wyciszone przez: %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="298"/>
        <source>You were undeafened by %1.</source>
        <translation>%1 wyłączył twoje ogłuszenie.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>%1 deafened by %2.</source>
        <translation type="obsolete">Słuchawki i mikrofon %1 zostały wyciszone przez %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="356"/>
        <source>%1 undeafened by %2.</source>
        <translation>%2 wyłączył ogłuszenie %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="439"/>
        <source>You were kicked from the server by %1: %2.</source>
        <translation>Zostałeś wykopany z serwera przez %1 z powodu: %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="444"/>
        <source>%3 was kicked from the server by %1: %2.</source>
        <translation>%3 został wykopany z serwera przez %1 z powodu: %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="437"/>
        <source>You were kicked and banned from the server by %1: %2.</source>
        <translation>Zostałes zbanowany oraz wykopany z serwera przez %1 z powodu %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="442"/>
        <source>%3 was kicked and banned from the server by %1: %2.</source>
        <translation>%3 został zbanowany oraz wykopany z serwera przez %1 z powodu: %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="385"/>
        <source>You were moved to %1 by %2.</source>
        <translation>Zostałeś przeniesiony do kanału %1 przez %2.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>%1 left channel.</source>
        <translation type="obsolete">%1 opuścił kanał.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>%1 moved out by %2 to %3.</source>
        <translation type="obsolete">%1 przeniesiony przez %2 do kanału %3.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>%1 moved in by %2 from %3.</source>
        <translation type="obsolete">%1 przeniesiony przez %2 do kanału %3.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>%1 moved out by %2.</source>
        <translation type="obsolete">%2 przeniósł %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="398"/>
        <source>%1 entered channel.</source>
        <translation>%1 dołączył do kanału.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>%1 moved in by %2.</source>
        <translation type="obsolete">%2 przeniósł %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="88"/>
        <source>Server connection rejected: %1.</source>
        <translation>Połączenie odrzucone: %1.</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="216"/>
        <source>Denied: %1.</source>
        <translation>Zabroniono: %1.</translation>
    </message>
    <message>
        <location filename="main.cpp" line="363"/>
        <source>Welcome to Mumble.</source>
        <translation>Witamy w Mumble.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="199"/>
        <source>Push-to-Talk</source>
        <comment>Global Shortcut</comment>
        <translation>Aktywacja przyciskiem</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="205"/>
        <source>Reset Audio Processor</source>
        <comment>Global Shortcut</comment>
        <translation>Restart preprocesora audio</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Toggle Mute Self</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Wycisz mikrofon</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Toggle Deafen Self</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Wycisz słuchawki i mikrofon</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Force Center Position</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Wymuś pozycję w środku</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Chan Parent</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Źródło kanału</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Chan Sub#%1</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Pod-Kanał # %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Chan All Subs</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Wszystkie pod-kanały</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="221"/>
        <source>Push-to-Mute</source>
        <comment>Global Shortcut</comment>
        <translation>Wyciszenie przyciskiem</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="224"/>
        <source>Join Channel</source>
        <comment>Global Shortcut</comment>
        <translation>Dołącz do kanału</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="227"/>
        <source>Toggle Overlay</source>
        <comment>Global Shortcut</comment>
        <translation>Włącz nakładkę</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Alt Push-to-Talk</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Alternatywny przycisk - aktywacji przyciskiem</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="218"/>
        <source>Unlink Plugin</source>
        <comment>Global Shortcut</comment>
        <translation>Wyłącz wtyczki</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="802"/>
        <source>Connecting to server %1.</source>
        <translation>Łączenie z serwerem &lt;b&gt;%1&lt;/b&gt;.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="935"/>
        <source>&lt;h2&gt;Version&lt;/h2&gt;&lt;p&gt;Protocol %1.%2.%3.&lt;/p&gt;</source>
        <translation>&lt;h2&gt;Wersja&lt;/h2&gt;&lt;p&gt;Protokół %1.%2.%3.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="940"/>
        <source>&lt;p&gt;No build information or OS version available.&lt;/p&gt;</source>
        <translation>&lt;p&gt;Brak informacji o wersji lub wersji dla twojego systemu.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="943"/>
        <source>&lt;p&gt;%1 (%2)&lt;br /&gt;%3&lt;/p&gt;</source>
        <translation>&lt;p&gt;%1 (%2)&lt;br /&gt;%3&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>&lt;h2&gt;Control channel&lt;/h2&gt;&lt;p&gt;Encrypted with %1 bit %2&lt;br /&gt;%3 ms average latency (%4 deviation)&lt;/p&gt;</source>
        <translation type="obsolete">&lt;h2&gt;Kanały&lt;/h2&gt;&lt;p&gt;Szyfrowany %1 bit %2&lt;br /&gt;%3 ms przeciętne opóźnienie (%4 załamanie)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="962"/>
        <source>&lt;h2&gt;Voice channel&lt;/h2&gt;&lt;p&gt;Encrypted with 128 bit OCB-AES128&lt;br /&gt;%1 ms average latency (%4 deviation)&lt;/p&gt;</source>
        <translation>&lt;h2&gt;Kanał głosowy&lt;/h2&gt;&lt;p&gt;Szyfrowanie 128 bitowym OCV-AES 128&lt;br /&gt;Średnie opóźnienie %1 ms (%4 odchylenie)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="973"/>
        <source>&lt;h2&gt;Audio bandwidth&lt;/h2&gt;&lt;p&gt;Maximum %1 kbit/s&lt;br /&gt;Current %2 kbit/s&lt;/p&gt;</source>
        <translation>&lt;h2&gt;Pasmo dźwięku&lt;/h2&gt;&lt;p&gt;Maksymalne %1 kbit/s&lt;br /&gt;Obecne %2 kbit/s&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1150"/>
        <source>Register yourself as %1</source>
        <translation>Zarejestruj się jako %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1150"/>
        <source>&lt;p&gt;You are about to register yourself on this server. This action cannot be undone, and your username cannot be changed once this is done. You will forever be known as &apos;%1&apos; on this server.&lt;/p&gt;&lt;p&gt;Are you sure you want to register yourself?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Masz zamiar zarejestrować się na tym serwerze. Akcja ta nie może zostać cofnięta, twoja nazwa użytkownika również nie może ulec zmianie w przyszłości. Na zawsze będziesz znany jako &apos;%1&apos; na tym serwerze.&lt;/p&gt;&lt;p&gt;Czy jesteś pewien, że chcesz się zarejestrować?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1152"/>
        <source>Register user %1</source>
        <translation>Zarejestruj użytkownika %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1152"/>
        <source>&lt;p&gt;You are about to register %1 on the server. This action cannot be undone, the username cannot be changed, and as a registered user, %1 will have access to the server even if you change the server password.&lt;/p&gt;&lt;p&gt;From this point on, %1 will be authenticated with the certificate currently in use.&lt;/p&gt;&lt;p&gt;Are you sure you want to register %1?&lt;/p&gt;</source>
        <translation>&lt;p&gt;Masz zamiar zarejestrować %1. Akcja ta nie może zostać cofnięta, nazwa użytkownika również nie może ulec zmianie w przyszłości, a jako zarejestrowany użytkownik %1 będzie mieć dostęp do tego serwera, nawet gdy zmienisz hasło na serwer.&lt;/p&gt;&lt;p&gt;Od tej chwili, %1 będzie autoryzowany certyfikatem, którego obecnie używa.&lt;/p&gt;&lt;p&gt;Czy jesteś pewien, że chcesz zarejestrować %1?&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1192"/>
        <source>Kicking user %1</source>
        <translation>Wykopywanie użytkownika %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1211"/>
        <source>Banning user %1</source>
        <translation>Banowanie użytkownika %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Change comment on user %1</source>
        <translation type="obsolete">Edycja komentarza użytkownika %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>To channel %1: %2</source>
        <translation type="obsolete">Do kanału %1: %2</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1545"/>
        <source>Message to channel %1</source>
        <translation>Wiadomość do kanału %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1463"/>
        <source>Are you sure you want to delete %1 and all its sub-channels?</source>
        <translation>Czy jesteś pewien, że chcesz usunąć %1 oraz wszystkie pod-kanały?</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2268"/>
        <source>Type message to channel &apos;%1&apos; here</source>
        <translation>Wiadomość do kanału &quot;%1&quot;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2271"/>
        <source>Type message to user &apos;%1&apos; here</source>
        <translation>Wiadomość do użytkownika &apos;%1&apos;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2362"/>
        <source>Choose image file</source>
        <translation>Wybierz plik obrazka</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Images (*.png *.jpg)</source>
        <translation type="obsolete">Obrazki (*.png *.jpg)</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2386"/>
        <source>Failed to load image</source>
        <translation>Nie udało się załadować obrazka</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2369"/>
        <source>Could not open file for reading.</source>
        <translation>Nie udało się otworzyć pliku do odczytu.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2386"/>
        <source>Image format not recognized.</source>
        <translation>Nieznany format obrazka.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="180"/>
        <source>&amp;Quit Mumble</source>
        <translation>&amp;Zakończ</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="183"/>
        <source>Closes the program</source>
        <translation>Zamyka program</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="186"/>
        <source>Exits the application.</source>
        <translation>Wyłącza aplikację.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Send Messa&amp;ge</source>
        <translation type="obsolete">Wyślij wiado&amp;mość</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="594"/>
        <source>Send a Text Message</source>
        <translation>Wyślij wiadomość tekstową</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="951"/>
        <source>&lt;h2&gt;Control channel&lt;/h2&gt;&lt;p&gt;Encrypted with %1 bit %2&lt;br /&gt;%3 ms average latency (%4 deviation)&lt;/p&gt;&lt;p&gt;Remote host %5 (port %6)&lt;/p&gt;</source>
        <translation>&lt;h2&gt;Kanał kontrolny&lt;/h2&gt;&lt;p&gt;Szyfrowanie %1 bit %2&lt;br /&gt;Średnie opóźnienie %3 ms (%4 odchylenie)&lt;/p&gt;&lt;p&gt;Zdalny host %5 (port %6)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1229"/>
        <source>Sending message to %1</source>
        <translation>Wysyłanie wiadomości do %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1322"/>
        <source>To %1: %2</source>
        <translation>Do %1: %2</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1322"/>
        <source>Message to %1</source>
        <translation>Wiadomość do %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1262"/>
        <source>View comment on user %1</source>
        <translation>Podgląd komentarza użytkownika %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1278"/>
        <source>Are you sure you want to reset the comment of user %1?</source>
        <translation>Czy jesteś pewny, że chcesz usunąć komentarz użytkownika %1?</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1543"/>
        <source>(Tree) %1: %2</source>
        <translation>(Do drzewa akanałów) %1: %2</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1545"/>
        <source>%1: %2</source>
        <translation>%1: %2</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1981"/>
        <source>Connected.</source>
        <translation>Połączono.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2128"/>
        <source>SSL Version mismatch</source>
        <translation>Nieprawidłowa wersja SSL</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2128"/>
        <source>This server is using an older encryption standard. It might be an older 1.1 based Mumble server.&lt;br /&gt;Would you like to launch the compatibility client to connect to it?</source>
        <translation>Ten serwer używa starszej wersji szyfrowania. Być może jest to starszy serwer bazujący na wersji 1.1 Mumble.&lt;br /&gt;Czy chcesz uruchomić klient kompatybilny wstecz, aby się połączyć?</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2154"/>
        <source>Failed to launch compatibility client</source>
        <translation>Nie udało się włączyć klienta kompatybilnego wstecz</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2154"/>
        <source>The compatibility client could not be found, or failed to start.&lt;br /&gt;Note that the compatibility client is an optional component for most installations, and might not be installed.</source>
        <translation>Klient kompatybilny wstecz nie został odnaleziony lub nie udało się go uruchomić.&lt;br /&gt;Pamiętaj, że klient kompatybilny wstecz to opcjonalny składnik instalacji i może wcale nie być zainstalowany.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2175"/>
        <source>Invalid username</source>
        <translation>Niepoprawna nazwa użytkownika</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2175"/>
        <source>You connected with an invalid username, please try another one.</source>
        <translation>Połączyłeś się do serwera z niewłaściwą nazwą użytkownika, spróbuj innej nazwy.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2175"/>
        <source>That username is already in use, please try another username.</source>
        <translation>Ta nazwa użytkownika jest już zajęta, spróbuj innej.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2180"/>
        <source>Wrong password</source>
        <translation>Błędne hasło</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2180"/>
        <source>Wrong password for registered users, please try again.</source>
        <translation>Podałeś złe hasło dla zarejestrowanych użytkowników, spróbuj jeszcze raz.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2180"/>
        <source>Wrong server password for unregistered user account, please try again.</source>
        <translation>Podałeś złe hasło dla niezarejestrowanych użytkowników, spróbuj jeszcze raz.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>From %1: %2</source>
        <translation type="obsolete">Od %1: %2</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="543"/>
        <source>Message from %1</source>
        <translation>Wiadomość od %1</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="516"/>
        <source>&amp;Audio Wizard</source>
        <translation>Kreator ustawień &amp;dźwięku</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="331"/>
        <source>Sends a text message to another user.</source>
        <translation>Wysyła wiadomość tekstową do innego użytkownika.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="164"/>
        <source>&amp;User</source>
        <translation>&amp;Użytkownik</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="132"/>
        <source>This is the chatbar&lt;br /&gt;If you enter text here and then press enter the text is sent to the user or channel that was selected. If nothing is selected the message is sent to your current channel.</source>
        <translation>To jest pasek czatu.&lt;br /&gt;Jeżeli wpiszesz w nim tekst i naciśniesz enter zostanie on wysłany do kanału lub użytkownika, który w chwili obecnej jest wybrany. Jeżeli nic lub nikt nie jest wybrany wiadomość zostanie wysłana do kanału, na którym się znajdujesz.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="138"/>
        <source>Chatbar</source>
        <translation>Pasek czatu</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="204"/>
        <source>Shows a dialog of registered servers, and also allows quick-connect.</source>
        <translation>Wyświetla okno z zarejestrowanymi serwerami, pozwala również na szybkie łączenie.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="264"/>
        <source>Kick user (with reason)</source>
        <translation>Kopnij użytkownika (z podaniem powodu)</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="267"/>
        <source>Kick selected user off server. You&apos;ll be asked to specify a reason.</source>
        <translation>Wyrzuca zaznaczonego użytkownika z serwera. Zostaniesz poproszony o podanie powodu.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="278"/>
        <source>Mute user</source>
        <translation>Wycisz użytkownika</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="281"/>
        <source>Mute or unmute user on server. Unmuting a deafened user will also undeafen them.</source>
        <translation>Wycisza lub wyłącza wyciszenie użytkownika na serwerze. Wyłączenie wyciszenia ogłuszonemu użytkownikowi wyłączy również ogłuszenie.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="289"/>
        <source>Kick and ban user (with reason)</source>
        <translation>Wykop i zbanuj użytkownika (z podaniem powodu)</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="292"/>
        <source>Kick and ban selected user from server. You&apos;ll be asked to specify a reason.</source>
        <translation>Wyrzuca i blokuje dostęp zaznaczonego użytkownika do serwera. Zostaniesz poproszony o podanie powodu.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="303"/>
        <source>Deafen user</source>
        <translation>Ogłusz użytkownika</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="306"/>
        <source>Deafen or undeafen user on server. Deafening a user will also mute them.</source>
        <translation>Ogłusza lub wyłącza ogłuszenie użytkownika na serwerze. Ogłuszenie użytkownika spowoduje również wyciszenie jego mikrofonu.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="317"/>
        <source>Mute user locally</source>
        <translation>Wycisz użytkownika lokalnie</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="320"/>
        <source>Mute or unmute user locally. Use this on other users in the same room.</source>
        <translation>Wycisza lub wyłącza wyciszenie użytkownika lokalnie. Używaj tej opcji na innych użytkownikach w tym samym kanale.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="358"/>
        <source>&amp;Edit</source>
        <translation>&amp;Edytuj</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="375"/>
        <source>This links your current channel to the selected channel. If users in a channel have permission to speak in the other channel, users can now hear each other. This is a permanent link, and will last until manually unlinked or the server is restarted. Please see the shortcuts for push-to-link.</source>
        <translation>Umożliwia połączenie twojego kanału z innym wybranym kanałem. Jeżeli użytkownicy posiadają uprawnienie &lt;i&gt;Mowa&lt;/i&gt; na łączonych kanałach będą mogli się nawzajem słyszeć. Połączenie jest aktywne dopóki nie rozłączysz kanałów lub do czasu gdy serwer zostanie zrestartowany. Prosimy zapoznać się ze skrótami Push-To-Link (Naciśnij-i-Połącz).</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="519"/>
        <source>Start the audio configuration wizard</source>
        <translation>Rozpocznij konfigurację dźwięku</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="522"/>
        <source>This will guide you through the process of configuring your audio hardware.</source>
        <translation>Ten kreator poprowadzi cię przez proces konfiguracji ustawień dźwięku.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2090"/>
        <source>SSL Verification failed: %1</source>
        <translation>Weryfikacja SSL nie powiodła się: %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2095"/>
        <source>&lt;b&gt;WARNING:&lt;/b&gt; The server presented a certificate that was different from the stored one.</source>
        <translation>&lt;b&gt;OSTRZEŻENIE:&lt;/b&gt; Ten serwer posiada obecnie inny certyfikat niż poprzedni, który masz zachowany u siebie.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2097"/>
        <source>Sever presented a certificate which failed verification.</source>
        <translation>Serwer posiada certyfikat, który nie przeszedł weryfikacji.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2106"/>
        <source>&lt;p&gt;%1.&lt;br /&gt;The specific errors with this certificate are: &lt;/p&gt;&lt;ol&gt;%2&lt;/ol&gt;&lt;p&gt;Do you wish to accept this certificate anyway?&lt;br /&gt;(It will also be stored so you won&apos;t be asked this again.)&lt;/p&gt;</source>
        <translation>&lt;p&gt;%1.&lt;br /&gt;Błędy certyfikatu: &lt;/p&gt;&lt;ol&gt;%2&lt;/ol&gt;&lt;p&gt;Czy mimo to chcesz go zaakceptować?&lt;br /&gt;(Mumble więcej cię o to nie zapyta.)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="741"/>
        <source>&amp;Information</source>
        <translation>&amp;Informacje</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="250"/>
        <source>Show information about the server connection</source>
        <translation>Wyświetl informacje o połączeniu</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="253"/>
        <source>This will show extended information about the connection to the server.</source>
        <translation>Wyświetla zaawansowane informacje na temat połączenia z serwerem.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="975"/>
        <source>Mumble Server Information</source>
        <translation>Serwer Mumble - Informacje</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2111"/>
        <source>&amp;View Certificate</source>
        <translation>&amp;Zobacz certyfikat</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="519"/>
        <source>Opening URL %1</source>
        <translation>Otwieranie adresu %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="208"/>
        <source>Mute Self</source>
        <comment>Global Shortcut</comment>
        <translation>Wyciszenie</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="210"/>
        <source>Set self-mute status.</source>
        <comment>Global Shortcut</comment>
        <translation>Przełącza stan wyciszenia (Włącza/Wyłącza).</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="211"/>
        <source>This will set or toggle your muted status. If you turn this off, you will also disable self-deafen.</source>
        <comment>Global Shortcut</comment>
        <translation>Przełącza stan wyciszenia. Jeżeli wyłączasz wyciszenie, wyłączasz również ogłuszenie.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="213"/>
        <source>Deafen Self</source>
        <comment>Global Shortcut</comment>
        <translation>Ogłuszenie</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="215"/>
        <source>Set self-deafen status.</source>
        <comment>Global Shortcut</comment>
        <translation>Przełącza stan ogłuszenia (Włącza/Wyłącza).</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="216"/>
        <source>This will set or toggle your deafened status. If you turn this on, you will also enable self-mute.</source>
        <comment>Global Shortcut</comment>
        <translation>Przełącza stan ogłuszenia. Jeżeli włączasz, włączasz również wyciszenie.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="230"/>
        <source>This will switch the states of the in-game overlay between showing everybody, just the users who are talking, and nobody.</source>
        <comment>Global Shortcut</comment>
        <translation type="obsolete">Przełącza stan nakładki podczas gry, będzie ona wyświetlała wszystkich, nikogo, lub użytkowników którzy aktualnie mówią.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="246"/>
        <source>Whisper</source>
        <translation>Szept</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2262"/>
        <source>Not connected</source>
        <translation>Niepołączony</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="523"/>
        <source>File does not exist</source>
        <translation>Plik nie istnieje</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="533"/>
        <source>File is not a configuration file.</source>
        <translation>Plik nie jest plikiem konfiguracyjnym.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="539"/>
        <source>Settings merged from file.</source>
        <translation>Ustawienia połączone z pliku.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="545"/>
        <source>URL scheme is not &apos;mumble&apos;</source>
        <translation>Adres URL nie jest obsługiwany przez Mumble (brak mumble:// w adresie)</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="570"/>
        <source>This version of Mumble can&apos;t handle URLs for Mumble version %1.%2.%3</source>
        <translation>Ta wersja Mumble nie obsługuje URL starszych wersji Mumble %1.%2.%3</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="599"/>
        <source>Connecting to %1</source>
        <translation>Łączenie z %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="599"/>
        <source>Enter username</source>
        <translation>Nazwa użytkownika</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Renames the channel</source>
        <translation type="obsolete">Zmienia nazwę kanału</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>This renames a channel.</source>
        <translation type="obsolete">Zmienia nazwę kanału.</translation>
    </message>
    <message>
        <location filename="main.cpp" line="376"/>
        <source>This is the first time you&apos;re starting Mumble.&lt;br /&gt;Would you like to go through the Audio Wizard to configure your soundcard?</source>
        <translation>Program Mumble został uruchomiony po raz pierwszy na tym komputerze.&lt;br /&gt; Czy chciałbyś uruchomić kreator ustawień dźwięku, aby skonfigurować podstawowe opcje aplikacji?</translation>
    </message>
    <message>
        <location filename="main.cpp" line="0"/>
        <source>&lt;h2&gt;Control channel&lt;/h2&gt;&lt;p&gt;Encrypted with %1 bit %2&lt;br /&gt;%3 ms average latency (%4 variance)&lt;/p&gt;</source>
        <translation type="obsolete">&lt;h2&gt;Kanał kontrolny&lt;/h2&gt;&lt;p&gt;Szyfrowanie %1 bit %2&lt;br /&gt;%1 ms przeciętnego opóźnienia (%4 niezgodności)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="960"/>
        <source>Voice channel is sent over control channel.</source>
        <translation>Kanał głosowy jest wysyłany przez kanał kontrolny.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>&lt;h2&gt;Voice channel&lt;/h2&gt;&lt;p&gt;Encrypted with 128 bit OCB-AES128&lt;br /&gt;%1 ms average latency (%4 variance)&lt;/p&gt;</source>
        <translation type="obsolete">&lt;h2&gt;Kanał głosowy&lt;/h2&gt;&lt;p&gt;Szyfrowanie 128-bitowym kluczem OCB-AES128&lt;br /&gt;%1 ms przeciętnego opóźnienia (%4 niezgodności)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="969"/>
        <source>UDP Statistics</source>
        <translation>Statystyki UDP</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="969"/>
        <source>To Server</source>
        <translation>Do serwera</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="969"/>
        <source>From Server</source>
        <translation>Od serwera</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="969"/>
        <source>Good</source>
        <translation>Dobre</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="969"/>
        <source>Late</source>
        <translation>Opóźnione</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="969"/>
        <source>Lost</source>
        <translation>Utracone</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="969"/>
        <source>Resync</source>
        <translation>Re-synchronizowane</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="189"/>
        <source>Ctrl+Q</source>
        <translation>Ctrl+Q</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Mute player locally</source>
        <translation type="obsolete">Wycisz użytkownika lokalnie</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Mute or unmute player locally. Use this on other players in the same room.</source>
        <translation type="obsolete">Wyciszanie mikrofonu lub przywracanie głosu danego użytkownika lokalnie. Używaj tego na innych użytkownikach na tym samym kanale.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&amp;Rename Channel</source>
        <translation type="obsolete">&amp;Zmień nazwę</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="566"/>
        <source>About &amp;Qt</source>
        <translation>O &amp;Qt</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1534"/>
        <source>Sending message to channel %1</source>
        <translation>Wysyłanie wiadomości do kanału: %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Sending message to channel tree %1</source>
        <translation type="obsolete">Wyślij wiadomość do wszystkich na: %1</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>To tree %1: %2</source>
        <translation type="obsolete">Do kanału %1: %2</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="1543"/>
        <source>Message to tree %1</source>
        <translation>Wyślij do drzewa kanałów %1</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="597"/>
        <source>Sends a text message to all users in a channel.</source>
        <translation>Wysyła wiadomość tekstową do wszystkich użytkowników na tym kanale.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Send &amp;Tree Message</source>
        <translation type="obsolete">Wyślij do &amp;drzewa kanałów</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Send message to channel tree.</source>
        <translation type="obsolete">Wyślij wiadomość do wszystkich na tym kanale.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>This sends a text message to a channel and it&apos;s subchannels.</source>
        <translation type="obsolete">Wysyła wiadomość do wszystkich na tym kanale oraz do wszystkich pod-kanałów.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Server maximum bandwidth is only %1 kbit/s. Quality auto-adjusted.</source>
        <translation type="obsolete">Maksymalny transfer serwera to %1 kbit/s. Jakość ustawiona automatycznie.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&lt;h2&gt;Audio bandwidth&lt;/h2&gt;&lt;p&gt;Maximum %1 kbit/s&lt;br /&gt;Current %2 kbit/s (Quality %3)&lt;/p&gt;</source>
        <translation type="obsolete">&lt;h2&gt;Szerokość pasma dźwięku&lt;/h2&gt;&lt;p&gt;Maksymalnie %1 kbit/s&lt;br /&gt;Obecnie %2 kbit/s (Jakość %3)&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Connected to server %1.</source>
        <translation type="obsolete">Połączony z serwerem %1.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="360"/>
        <source>Mumble is currently connected to a server. Do you want to Close or Minimize it?</source>
        <translation>&lt;b&gt;UWAGA!&lt;/b&gt; Mumble jest obecnie połączony z serwerem. Chcesz zakończyć czy zminimalizować program?</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="361"/>
        <source>Close</source>
        <translation>Zakończ</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="362"/>
        <source>Minimize</source>
        <translation>Minimalizuj</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="259"/>
        <source>&amp;Window</source>
        <translation>&amp;Okno</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="261"/>
        <source>Ctrl+M</source>
        <translation>Ctrl+M</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="0"/>
        <source>Ctrl+W</source>
        <translation type="obsolete">Ctrl+W</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="233"/>
        <source>Toggle Minimal</source>
        <comment>Global Shortcut</comment>
        <translation>Tryb minimalny</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="605"/>
        <source>&amp;Minimal View</source>
        <translation>&amp;Widok minimalny</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="608"/>
        <source>Toggle minimal window modes</source>
        <translation>Włącz/Wyłącz widok minimalny</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="611"/>
        <source>This will toggle minimal mode, where the log window and menu is hidden.</source>
        <translation>Przełącza na widok minimalny, gdzie okno z dziennikiem i menu są ukryte.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="104"/>
        <source>Log</source>
        <translation>Dziennik</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="236"/>
        <source>Volume Up (+10%)</source>
        <comment>Global Shortcut</comment>
        <translation>Głośność w górę (+10%)</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="239"/>
        <source>Volume Down (-10%)</source>
        <comment>Global Shortcut</comment>
        <translation>Głośność w dół (-10%)</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="513"/>
        <source>Clear</source>
        <translation>Wyczyść</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="1382"/>
        <source>You have Channel Dragging set to &quot;Do Nothing&quot; so the channel wasn&apos;t moved.</source>
        <translation>Masz wyłączone przeciąganie kanałów, więc kanał nie został przeniesiony.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="1388"/>
        <source>Unknown Channel Drag mode in UserModel::dropMimeData.</source>
        <translation>Nieznany sposób przeciągania kanałów w UserModel::dropMimeData.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="0"/>
        <source>Unknown Channel Drag mode in PlayerModel::dropMimeData.</source>
        <translation type="obsolete">Nieznany tryb Przeciągania Kanału w PlayerModel::dropMimeData.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="380"/>
        <source>&amp;Unlink</source>
        <comment>Channel</comment>
        <translation>&amp;Rozłącz kanały</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&amp;Unlink</source>
        <comment>Plugin</comment>
        <translation type="obsolete">&amp;Wyłącz wtyczki</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="534"/>
        <source>Server</source>
        <comment>message from</comment>
        <translation>Serwera</translation>
    </message>
    <message>
        <location filename="Messages.cpp" line="0"/>
        <source>&amp;Quit</source>
        <translation type="obsolete">&amp;Zakończ</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="619"/>
        <source>Hide Frame</source>
        <translation>Ukryj ramkę</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="622"/>
        <source>Toggle showing frame on minimal window</source>
        <translation>Uaktywnia obramowanie okna w trybie minimalnym</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="625"/>
        <source>This will toggle whether the minimal window should have a frame for moving and resizing.</source>
        <translation>Uaktywnia obramowanie okna w trybie minimalnym dzięki czemu można przenosić i zmieniać rozmiar okna.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="591"/>
        <source>Send &amp;Message</source>
        <translation>Wyślij &amp;wiadomość</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="391"/>
        <source>&amp;Unlink All</source>
        <translation>R&amp;ozłącz wszystkie</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="630"/>
        <source>&amp;Certificate Wizard</source>
        <translation>Kreator &amp;certyfikatów</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="641"/>
        <source>&amp;Register</source>
        <translation>&amp;Zarejestruj</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Change &amp;Texture</source>
        <translation type="obsolete">Zmień &amp;Obrazek</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>&amp;Remove Texture</source>
        <translation type="obsolete">&amp;Usuń Obrazek</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="720"/>
        <source>Reset &amp;Comment</source>
        <translation>Usuń &amp;komentarz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="723"/>
        <source>Reset the comment of the selected user.</source>
        <translation>Usuwa komentarz wybranemu użytkownikowi.</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="728"/>
        <source>&amp;Join Channel</source>
        <translation>&amp;Dołącz do kanału</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="733"/>
        <source>View Comment</source>
        <translation>Wyświetl komentarz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="736"/>
        <source>View comment in editor</source>
        <translation>Podgląd komentarza w edytorze</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="744"/>
        <source>Query server for connection information for user</source>
        <translation>Wyświetla okno z informacjami o użytkowniku</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="77"/>
        <source>S&amp;erver</source>
        <translation>&amp;Serwer</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="82"/>
        <source>&amp;Self</source>
        <translation>&amp;Własne</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="473"/>
        <source>Audio S&amp;tatistics</source>
        <translation>&amp;Statystyki audio</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="484"/>
        <source>&amp;Unlink Plugins</source>
        <translation>&amp;Wyłacz wtyczki</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="0"/>
        <source>Change your own comment.</source>
        <translation type="obsolete">Zmień swój komentarz</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="764"/>
        <source>R&amp;egister</source>
        <translation>&amp;Zarejestruj</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="767"/>
        <source>Register yourself on the server</source>
        <translation>Zarejestruj siebie na serwerze</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="696"/>
        <source>Change &amp;Avatar</source>
        <translation>Zmień &amp;awatar</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="699"/>
        <source>Change your avatar image on this server</source>
        <translation>Zmień swój awatar na tym serwerze</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="712"/>
        <source>&amp;Remove Avatar</source>
        <translation>&amp;Usuń awatar</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="715"/>
        <source>Remove currently defined avatar image.</source>
        <translation>Usuwa aktualnie zdefiniowany awatar.</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="843"/>
        <source>Change your comment</source>
        <translation>Edycja własnego komentarza</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="2362"/>
        <source>Images (*.png *.jpg *.svg)</source>
        <translation>Obrazki (*.png *.jpg *.svg)</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="160"/>
        <source>Icon Toolbar</source>
        <translation>Ikony</translation>
    </message>
    <message>
        <location filename="MainWindow.ui" line="756"/>
        <source>Change your own comment</source>
        <translation>Zmień swój komentarz</translation>
    </message>
    <message>
        <location filename="MainWindow.cpp" line="230"/>
        <source>This will switch the states of the in-game overlay.</source>
        <comment>Global Shortcut</comment>
        <translation>Przełącza stany nakładki.</translation>
    </message>
</context>
<context>
    <name>NetworkConfig</name>
    <message>
        <location filename="NetworkConfig.cpp" line="53"/>
        <source>Network</source>
        <translation>Sieć</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="14"/>
        <source>Form</source>
        <translation>Formularz</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="26"/>
        <source>Connection</source>
        <translation>Połączenie</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="32"/>
        <source>Use TCP compatibility mode</source>
        <translation>Używaj trybu zgodności TCP</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="35"/>
        <source>&lt;b&gt;Enable TCP compatibility mode&lt;/b&gt;.&lt;br /&gt;This will make Mumble use only TCP when communicating with the server. This will increase overhead and cause lost packets to produce noticeable pauses in communication, so this should only be used if you are unable to use the default (which uses UDP for voice and TCP for control).</source>
        <translation>&lt;b&gt;Uaktywnij tryb kompatybilności TCP.&lt;/b&gt; Dzięki tej opcji Mumble działa w przypadkach kiedy nie można się połączyć w trybie UDP. Negatywnym skutkiem tej opcji jest utracenie pewnej liczby pakietów.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="0"/>
        <source>Use TCP mode</source>
        <translation type="obsolete">Używaj trybu TCP</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="58"/>
        <source>Reconnect when disconnected</source>
        <translation>Automatycznie wznawiaj przerwane połączenie</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="61"/>
        <source>&lt;b&gt;Reconnect when disconnected&lt;/b&gt;.&lt;br /&gt;This will make Mumble try to automatically reconnect after 10 seconds if your server connection fails.</source>
        <translation>&lt;b&gt;Automatycznie wznawiaj przerwane połączenie&lt;/b&gt; Mumble będzie ponawiać próby połączenia co 10 sekund gdy twoje połączenie z serwerem zostanie przerwane.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="64"/>
        <source>Reconnect automatically</source>
        <translation>Automatycznie wznawiaj przerwane połączenie</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="93"/>
        <source>Proxy</source>
        <translation>Proxy</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="99"/>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="112"/>
        <source>Type of proxy to connect through</source>
        <translation>Typ proxy</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="0"/>
        <source>&lt;b&gt;Type of proxy to connect through&lt;/b&gt;&lt;br /&gt;This makes Mumble connect through a proxy for all outgoing connections. Note: Proxy tunneling forces Mumble into TCP compatibility mode, causing all voice data to be sent via the control channel.</source>
        <translation type="obsolete">&lt;b&gt;Rodzaj proxy.&lt;/b&gt; Połączenia przez proxy wymuszają tryb zgodności TCP.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="119"/>
        <source>Direct connection</source>
        <translation>Połączenie bezpośrednie</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="124"/>
        <source>HTTP(S) proxy</source>
        <translation>HTTP(S) Proxy</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="129"/>
        <source>SOCKS5 proxy</source>
        <translation>SOCKS5 Proxy</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="137"/>
        <source>Hostname</source>
        <translation>Host</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="153"/>
        <source>Hostname of the proxy</source>
        <translation>Nazwa hosta proxy</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="0"/>
        <source>&lt;b&gt;Hostname of the proxy.&lt;b&gt;&lt;br /&gt;This field specifies the hostname of the proxy you wish to tunnel network traffic through.</source>
        <translation type="obsolete">Nazwa serwera proxy.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="38"/>
        <source>Force TCP mode</source>
        <translation>Wymuś tryb TCP</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="45"/>
        <source>Enable QoS to prioritize packets</source>
        <translation>Włącz QoS, aby priorytetyzować pakiety</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="48"/>
        <source>This will enable QoS, which will attempt to prioritize voice packets over other traffic.</source>
        <translation>Uaktywnia QoS, który będzie próbował nadawać pakietom wychodzącym wyższy priorytet.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="51"/>
        <source>Use Quality of Service</source>
        <translation>Używaj Quality of Service</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="71"/>
        <source>Don&apos;t send certificate to server and don&apos;t save passwords. (Not saved).</source>
        <translation>Nie wysyłaj certyfikatu na serwer ani nie zapamiętuj haseł.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="74"/>
        <source>&lt;b&gt;This will suppress identity information from the client.&lt;/b&gt;&lt;p&gt;The client will not identify itself with a certificate, even if defined, and will not cache passwords for connections. This is primarily a test-option and is not saved.&lt;/p&gt;</source>
        <translation>&lt;b&gt;Usuwa wszelkie informacje z klienta.&lt;/b&gt;&lt;p&gt;Klient nie będzie identyfikował się za pomocą certyfikatu, nawet jeżeli wcześniej był tak skonfigurowany, oraz nie będzie zapisywał haseł dla połączeń. Jest to opcja testowa i nie jest zapamiętywana.&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="77"/>
        <source>Suppress certificate and password storage</source>
        <translation>Nie zachowuj haseł i certyfikatów</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="115"/>
        <source>&lt;b&gt;Type of proxy to connect through.&lt;/b&gt;&lt;br /&gt;This makes Mumble connect through a proxy for all outgoing connections. Note: Proxy tunneling forces Mumble into TCP compatibility mode, causing all voice data to be sent via the control channel.</source>
        <translation>&lt;b&gt;Typ proxy używanego do połączenia.&lt;/b&gt;&lt;br /&gt;Zmusza Mumble do połączenia przez serwer proxy dla wszystkich wychodzących połączeń. Informacja: Tunelowanie proxy zmusza Mumble do używania trybu TCP, sprawiając że wszystkie dane będą przesyłane przez kanał kontrolny.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="156"/>
        <source>&lt;b&gt;Hostname of the proxy.&lt;/b&gt;&lt;br /&gt;This field specifies the hostname of the proxy you wish to tunnel network traffic through.</source>
        <translation>&lt;b&gt;Nazwa hosta proxy.&lt;/b&gt;&lt;br /&gt; Te pole określa nazwę hosta serwera proxy przez, który chcesz puścić cały ruch.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="178"/>
        <source>Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="203"/>
        <source>Port number of the proxy</source>
        <translation>Numer portu</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="206"/>
        <source>&lt;b&gt;Port number of the proxy.&lt;/b&gt;&lt;br /&gt;This field specifies the port number that the proxy expects connections on.</source>
        <translation>Port na zdalnym serwerze.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="222"/>
        <source>Username</source>
        <translation>Użytkownik</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="229"/>
        <source>Username for proxy authentication</source>
        <translation>Nazwa użytkownika dla proxy</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="232"/>
        <source>&lt;b&gt;Username for proxy authentication.&lt;/b&gt;&lt;br /&gt;This specifies the username you use for authenticating yourself with the proxy. In case the proxy does not use authentication, or you want to connect anonymously, simply leave this field blank.</source>
        <translation>Nazwa użytkownika przy autoryzacji do proxy.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="239"/>
        <source>Password</source>
        <translation>Hasło</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="246"/>
        <source>Password for proxy authentication</source>
        <translation>Hasło dla proxy</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="249"/>
        <source>&lt;b&gt;Password for proxy authentication.&lt;/b&gt;&lt;br /&gt;This specifies the password you use for authenticating yourself with the proxy. In case the proxy does not use authentication, or you want to connect anonymously, simply leave this field blank.</source>
        <translation>Hasło do serwera proxy. Jeżeli dostęp ma być anonimowy pozostaw te pole puste.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="268"/>
        <source>Misc</source>
        <translation>Różne</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="274"/>
        <source>Prevent log from downloading images</source>
        <translation>Nie zezwalaj na pobieranie obrazów w dzienniku</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="277"/>
        <source>&lt;b&gt;Disable image download&lt;/b&gt;&lt;br/&gt;
Prevents the client from downloading images embedded into chat messages with the img tag.</source>
        <translation>&lt;b&gt;Nie pobieraj obrazów&lt;/b&gt;&lt;br/&gt;Zapobiega pobieraniu obrazów umieszczanych w dzienniku za pomocą tagu img.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="281"/>
        <source>Disable image download</source>
        <translation>Nie pobieraj obrazów</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="291"/>
        <source>Mumble services</source>
        <translation>Usługi Mumble</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="297"/>
        <source>Check for new releases of Mumble automatically.</source>
        <translation>Automatycznie sprawdzaj czy są nowe wersje Mumble.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="300"/>
        <source>This will check for new releases of Mumble every time you start the program, and notify you if one is available.</source>
        <translation>Sprawdza czy jest nowsza wersja Mumble za każdym razem kiedy uruchamiasz program, oraz powiadamia cię jeżeli jest dostępna.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="303"/>
        <source>Check for application updates on startup</source>
        <translation>Sprawdzaj dostępność aktualizacji przy starcie</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="310"/>
        <source>Check for new releases of plugins automatically.</source>
        <translation>Automatycznie sprawdzaj czy są nowe wersje wtyczek.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="313"/>
        <source>This will check for new releases of plugins every time you start the program, and download them automatically.</source>
        <translation>Sprawdza czy są nowsze wersje wtyczek za każdym razem kiedy włączasz program, pozwala również na ich automatyczne pobieranie.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="316"/>
        <source>Download plugin updates on startup</source>
        <translation>Pobieraj aktualizacje wtyczek przy starcie</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="326"/>
        <source>&lt;b&gt;Submit anonymous statistics.&lt;/b&gt;&lt;br /&gt;Mumble has a small development team, and as such needs to focus its development where it is needed most. By submitting a bit of statistics you help the project determine where to focus development.</source>
        <translation>&lt;b&gt;Wysyłaj anonimowe statystyki.&lt;/b&gt;&lt;br /&gt;Mumble posiada mały zespół deweloperów, który musi skupić się na funkcjach, które są najbardziej potrzebne. Wysyłając statystyki pomagasz projektowi w określeniu na czym skupić się w przyszłości.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="0"/>
        <source>Check for updates on startup</source>
        <translation type="obsolete">Sprawdzaj podczas uruchamiania czy jest nowsza wersja Mumble</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="323"/>
        <source>Submit anonymous statistics to the Mumble project</source>
        <translation>Przekazuje anonimowe statystyki do twórców Mumble</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="0"/>
        <source>&lt;b&gt;Submit anonymous statistics.&lt;/b&gt;&lt;br /&gt;Mumble has a small development team, and as such needs to focus it&apos;s development where it&apos;s needed most. By submitting a bit of statistics you help the project determine where to focus development.</source>
        <translation type="obsolete">&lt;b&gt;Zezwalaj na wysyłanie anonimowych statystyk.&lt;/b&gt;&lt;br /&gt;Mumble ma małą drużynę deweloperów, która musi się skupić na opcjach, które są jak najbardziej potrzebne. Zezwalając na wysyłanie statystyk pomagasz ustalić nad czym skupić dalszy rozwój aplikacji.</translation>
    </message>
    <message>
        <location filename="NetworkConfig.ui" line="329"/>
        <source>Submit anonymous statistics</source>
        <translation>Wysyłaj anonimowe statystyki</translation>
    </message>
    <message>
        <location filename="NetworkConfig.cpp" line="88"/>
        <source>Updates are mandatory when using snapshot releases.</source>
        <translation>Aktualizacje są obowiązkowe gdy używasz wersji testowych.</translation>
    </message>
</context>
<context>
    <name>Overlay</name>
    <message>
        <location filename="NetworkConfig.cpp" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="892"/>
        <source>Failed to create communication with overlay at %2: %1. No overlay will be available.</source>
        <translation>Tworzenie komunikacji z nakładką nie powiodło się w %2: %1. Nakładka nie będzie dostępna.</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="0"/>
        <source>Failed to load overlay library. This means either that:
- the library (mumble_ol.dll) wasn&apos;t found in the directory you ran Mumble from
- you&apos;re on an OS earlier than WinXP SP2
- you do not have the June 2007 updated version of DX9.0c</source>
        <translation type="obsolete">Nie udało się załadowac biblioteki nakładki. Oznacza to, że:
- brakuje biblioteki w folderze Mumble (mumble_ol.dll)
- jesteś na starszym systemie niż Windows XP SP2
- nie masz zainstalowanego DirectX 9.0c z Czerwca 2007</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="0"/>
        <source>Failed to load overlay library. This means either that:
- the library (mumble_ol.dll) wasn&apos;t found in the directory you ran Mumble from
- you&apos;re on an OS earlier than WinXP SP2</source>
        <translation type="obsolete">Nie udało się załadować bibliotek nakładki, oznacza to że:
- biblioteka (mumble_ol.dll) nie znajduje się w folderze aplikacji
- jesteś na systemie starszym niż WinXP SP2</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="0"/>
        <source>Failed to initialize overlay memory. This usually means that the shared memory is locked by the OS, and you need to reboot to release it.</source>
        <translation type="obsolete">Nie udało się zainicjalizować pamięci nakładki. Ten błąd zazwyczaj oznacza, że pamięć współdzielona jest zablokowana przez system i musisz uruchomić komputer ponownie, aby ją zwolnić.</translation>
    </message>
</context>
<context>
    <name>OverlayConfig</name>
    <message>
        <location filename="Overlay.ui" line="20"/>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="65"/>
        <source>Position</source>
        <translation>Pozycja nakładki na ekranie</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="158"/>
        <source>Font</source>
        <translation>Czcionka</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="32"/>
        <source>Enable Overlay</source>
        <translation>Włącz nakładkę</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="26"/>
        <source>Enable overlay.</source>
        <translation>Włącza nakładkę.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="0"/>
        <source>This sets whether the overlay is enabled or not. This setting is only checked with D3D9 applications are started, so make sure Mumble is running and this option is on before you start the application.&lt;br /&gt;Please note that if you start the application after starting Mumble, or if you disable the overlay while running, there is no safe way to restart the overlay without also restarting the application.</source>
        <translation type="obsolete">To ustawia czy nakładka jest aktywna, czy nie. Te ustawienia są sprawdzane tylko podczas uruchamiania aplikacji obsługujących D3D9, więc upewnij się czy nakładka jest włączona zanim uruchomisz aplikację.&lt;br /&gt;Należy pamiętać że jeżeli uruchomisz aplikację przed włączeniem Mumble, lub wyłączysz nakładkę podczas jej działania, to nie ma bezpiecznej metody by zrestartować nakładkę bez ponownego uruchomienia aplikacji.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="39"/>
        <source>Who to show on the overlay</source>
        <translation>Kogo wyświetlać w nakładce</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="42"/>
        <source>&lt;b&gt;This sets who to show in the in-game overlay.&lt;/b&gt;&lt;br /&gt;If many people are connected to the same channel, the overlay list might be very long. Use this to shorten it.&lt;br /&gt;&lt;i&gt;No one&lt;/i&gt; - Don&apos;t show anyone (but leave overlay running).&lt;br /&gt;&lt;i&gt;Only talking&lt;/i&gt; - Only show talking people.&lt;br /&gt;&lt;i&gt;Everyone&lt;/i&gt; - Show everyone.</source>
        <translation>&lt;b&gt;Określa kogo widać na nakładce podczas gry.&lt;/b&gt;&lt;br /&gt;Jeżeli wiele osób jest podłączonych do tego samego kanału nakładka może stać się bardzo długa. Użyj tej opcji, aby ją skrócić &lt;br /&gt;&lt;i&gt;Nie wyświetlaj nikogo&lt;/i&gt; - Nie wyświetla nikogo (ale pozostawia nakładkę włączoną).&lt;br /&gt;&lt;i&gt;Wyświetlaj tylko mówiących&lt;/i&gt; - Wyświetla tylko mówiących użytkowników.&lt;br /&gt;&lt;i&gt;Wyświetlaj wszystkich&lt;/i&gt; - Wyświetla wszystkich.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="55"/>
        <source>Always Show Self</source>
        <translation>Zawsze wyświetlaj moją nazwę na nakładce</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="49"/>
        <source>Always show yourself on overlay.</source>
        <translation>Twoja nazwa użytkownika będzie zawsze wyświetlana na nakładce.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="52"/>
        <source>This sets whether to always show yourself or not. This setting is useful if you aren&apos;t showing everyone in the overlay, as then you would only see your own status if you were talking, which wouldn&apos;t let you see that you were deafened or muted.</source>
        <translation>Ustawia czy zobaczysz swoją nazwę użytkownika na nakładce czy też nie.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="0"/>
        <source>Show User Textures</source>
        <translation type="obsolete">Wyświetlaj awatary użytkowników</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="0"/>
        <source>Show User custom textures instead of text on the overlay.</source>
        <translation type="obsolete">Wyświetla awatary użytkowników zamiast ich nazw.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="0"/>
        <source>This sets whether to download and use custom textures for registered users. If disabled, the regular outline text will be used instead.</source>
        <translation type="obsolete">Określa czy program ma pobierać awatary zarejestrowanych użytkowników. Jeśli wyłączone, w zamian zostanie użyty zwykły tekst.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="106"/>
        <source>Grow Left</source>
        <translation>Do lewej</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="100"/>
        <source>Let overlay grow to the left</source>
        <translation>Do lewej</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="103"/>
        <source>The overlay tries to stay as small as possible and at the position you have selected. This allows the overlay to grow to the left if needed.</source>
        <translation>Nakładka stara się pozostać najmniejszą jak tylko to tylko możliwe w pozycji, którą ustawiłeś. Pozwala nakładce rosnąć w lewo jeżeli trzeba.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="119"/>
        <source>Grow Right</source>
        <translation>Do prawej</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="77"/>
        <source>Grow Up</source>
        <translation>Do góry</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="71"/>
        <source>Let overlay grow upwards</source>
        <translation>Pozwala nakładce rosnąć w górę</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="132"/>
        <source>Grow Down</source>
        <translation>Do dołu</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="126"/>
        <source>Let overlay grow downwards</source>
        <translation>Pozwala nakładce rosnąć do dołu</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="139"/>
        <source>X-Position of Overlay</source>
        <translation>Pozycja X Nakładki</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="142"/>
        <source>This sets the relative X position of the overlay.</source>
        <translation>Ustawia pozycję X nakładki.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="84"/>
        <source>Y-Position of Overlay</source>
        <translation>Pozycja Y Nakładki</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="29"/>
        <source>This sets whether the overlay is enabled or not. This setting is only checked when applications are started, so make sure Mumble is running and this option is on before you start the application.&lt;br /&gt;Please note that if you start Mumble after starting the application, or if you disable the overlay while the application is running, there is no safe way to restart the overlay without also restarting the application.</source>
        <translation>Określa czy nakładka jest włączona czy nie. Ustawienie to jest sprawdzane przed startem aplikacji, a więc upewnij się że Mumble jest uruchomione oraz nakładka włączona przed uruchomieniem aplikacji.&lt;br /&gt;Zwróć uwagę na to, że jeśli uruchomisz Mumble po tym jak uruchomisz aplikację albo jeżeli wyłączysz nakładkę podczas działania apliakcji, nie istnieje żaden sposób, aby uruchomić nakładkę bez ponownego uruchomienia aplikacji.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="87"/>
        <source>This sets the relative Y position of the overlay.</source>
        <translation>Ustawia pozycję Y nakładki.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="164"/>
        <source>Current Font</source>
        <translation>Obecna czcionka</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="178"/>
        <source>Set Font</source>
        <translation>Czcionka</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="192"/>
        <source>Maximum height of names.</source>
        <translation>Maksymalna wysokość nazw użytkownika.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="195"/>
        <source>This sets the maximum height of names shown, relative to the screen height. If your active 3D window is 800 pixels tall and this is set to 5%, each name will be 40 pixels tall. Note that the names will not be taller than 60 pixels no matter what you set here.</source>
        <translation>Maksymalna wysokość nazwy użytkownika na nakładce.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="185"/>
        <source>Maximum height</source>
        <translation>Maksymalna wysokość</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="309"/>
        <source>Change</source>
        <translation>Zmień</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="0"/>
        <source>Color for players</source>
        <translation type="obsolete">Kolor użytkownika nieaktywnego</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="0"/>
        <source>Color for talking players</source>
        <translation type="obsolete">Kolor użytkownika aktywnego</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="0"/>
        <source>Color for alt-talking players</source>
        <translation type="obsolete">Alternatywny kolor użytkownika aktywnego</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="274"/>
        <source>Color for Channels</source>
        <translation>Kolor kanałów</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="295"/>
        <source>Color for active Channels</source>
        <translation>Kolor aktywnych kanałów</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="139"/>
        <source>Overlay</source>
        <translation>Nakładka</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="50"/>
        <source>Show no one</source>
        <translation>Nie wyświetlaj nikogo</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="51"/>
        <source>Show only talking</source>
        <translation>Wyświetlaj tylko mówiących</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="52"/>
        <source>Show everyone</source>
        <translation>Wyświetlaj wszystkich</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="218"/>
        <source>Color for users</source>
        <translation>Kolor dla użytkowników</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="232"/>
        <source>Color for talking users</source>
        <translation>Kolor dla mówiących użytkowników</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="253"/>
        <source>Color for whispering users</source>
        <translation>Kolor dla szepczących użytkowników</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="131"/>
        <source>Color for channels</source>
        <translation>Kolor dla kanałów</translation>
    </message>
    <message>
        <location filename="Overlay.cpp" line="135"/>
        <source>Color for active channels</source>
        <translation>Kolor dla aktywnych kanałów</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="14"/>
        <source>Form</source>
        <translation>Formularz</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="74"/>
        <source>The overlay tries to stay as small as possible and at the position you have selected. This allows the overlay to grow upwards if needed.</source>
        <translation>Nakładka stara się pozostać najmniejszą jak to tylko możliwe w pozycji, którą ustawiłeś. Pozwala nakładce rosnąć w górę jeżeli trzeba.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="113"/>
        <source>Let overlay grow to the right</source>
        <translation>Pozwala nakładce rosnąć do prawej</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="116"/>
        <source>The overlay tries to stay as small as possible and at the position you have selected. This allows the overlay to grow to the right if needed.</source>
        <translation>Nakładka stara się pozostać najmniejszą jak to tylko możliwe w pozycji, którą ustawiłeś. Pozwala nakładce rosnąć w prawo jeżeli trzeba.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="129"/>
        <source>The overlay tries to stay as small as possible and at the position you have selected. This allows the overlay to grow downwards if needed.</source>
        <translation>Nakładka stara się pozostać najmniejszą jak to tylko możliwe w pozycji, którą ustawiłeś. Pozwala nakładce rosnąć w dół jeżeli trzeba.</translation>
    </message>
    <message>
        <location filename="Overlay.ui" line="211"/>
        <source>TextLabel</source>
        <translation>Tekst</translation>
    </message>
</context>
<context>
    <name>OverlayPrivateWin</name>
    <message>
        <location filename="Overlay.ui" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="Overlay_win.cpp" line="64"/>
        <source>Failed to load overlay library. This means either that:
- the library (mumble_ol.dll) wasn&apos;t found in the directory you ran Mumble from
- you&apos;re on an OS earlier than WinXP SP2</source>
        <translation>Nie udało się załadować bibliotek nakładki. Może to oznaczać że:
- biblioteka (mumble_ol.dll) nie znajduje się w folderze aplikacji
- jesteś na systemie starszym niż WinXP z SP2</translation>
    </message>
</context>
<context>
    <name>PlayerModel</name>
    <message>
        <location filename="Overlay_win.cpp" line="0"/>
        <source>This is a player connected to the server. The icon to the left of the player indicates whether or not they are talking:&lt;br /&gt;&lt;img src=&quot;skin:talking_on.png&quot; /&gt; Talking&lt;br /&gt;&lt;img src=&quot;skin:talking_off.png&quot; /&gt; Not talking</source>
        <translation type="obsolete">To jest użytkownik połączony do serwera. Ikona po lewej stronie wskazuje czy użytkownik mówi czy milczy.&lt;br /&gt;&lt;img src=&quot;skin:talking_on.png&quot; /&gt;Mówi&lt;br /&gt;&lt;img src=&quot;skin:talking_off.png&quot; /&gt;Milczy</translation>
    </message>
    <message>
        <location filename="Overlay_win.cpp" line="0"/>
        <source>This is a channel on the server. Only players in the same channel can hear each other.</source>
        <translation type="obsolete">To jest kanał na serwerze. Tylko użytkownicy znajdujący się na tym samym kanale mogą słyszeć się nawzajem.</translation>
    </message>
    <message>
        <location filename="Overlay_win.cpp" line="0"/>
        <source>This shows the flags the player has on the server, if any:&lt;br /&gt;&lt;img src=&quot;skin:authenticated.png&quot; /&gt;Authenticated user&lt;br /&gt;&lt;img src=&quot;skin:muted_self.png&quot; /&gt;Muted (by self)&lt;br /&gt;&lt;img src=&quot;skin:muted_server.png&quot; /&gt;Muted (by admin)&lt;br /&gt;&lt;img src=&quot;skin:deafened_self.png&quot; /&gt;Deafened (by self)&lt;br /&gt;&lt;img src=&quot;skin:deafened_server.png&quot; /&gt;Deafened (by admin)&lt;br /&gt;A player muted by himself is probably just away, talking on the phone or something like that.&lt;br /&gt;A player muted by an admin is probably also just away, and the noise the player is making was annoying enough that an admin muted him.</source>
        <translation type="obsolete">To są atrybuty jakie użytkownik posiada na serwerze:&lt;br /&gt;&lt;img src=&quot;skin:authenticated.png&quot; /&gt;Uwierzytelniony użytkownik&lt;br /&gt;&lt;img src=&quot;skin:muted_self.png&quot; /&gt;Wyciszony mikrofon (przez siebie)&lt;br /&gt;&lt;img src=&quot;skin:muted_server.png&quot; /&gt;Wyciszony mikrofon (przez administratora)&lt;br /&gt;&lt;img src=&quot;skin:deafened_self.png&quot; /&gt;Wyciszone słuchawki (przez użytkownika)&lt;br /&gt;&lt;img src=&quot;skin:deafened_server.png&quot; /&gt;Wyciszone słuchawki (przez administratora)&lt;br /&gt;Użytkownik który ma wyciszony mikrofon i/lub słuchawki przez siebie prawdopodobnie odszedł od komputera lub prowadzi inna rozmowę (np. przez telefon).&lt;br /&gt;Użytkownik, który ma wyciszony mikrofon i/lub słuchawki przez administratora prawdopodobnie wydawał dziwne dźwięki i denerwował innych przez to został wyciszony.</translation>
    </message>
    <message>
        <location filename="Overlay_win.cpp" line="0"/>
        <source>Name</source>
        <translation type="obsolete">Kanał(y)</translation>
    </message>
    <message>
        <location filename="Overlay_win.cpp" line="0"/>
        <source>Flags</source>
        <translation type="obsolete">Atrybut(y)</translation>
    </message>
    <message>
        <location filename="Overlay_win.cpp" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="Overlay_win.cpp" line="0"/>
        <source>Are you sure you want to drag this channel?</source>
        <translation type="obsolete">Czy jesteś pewien, że chcesz przeciągnąć ten kanał?</translation>
    </message>
</context>
<context>
    <name>PluginConfig</name>
    <message>
        <location filename="Plugins.ui" line="20"/>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="42"/>
        <source>Plugins</source>
        <translation>Wtyczki</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="32"/>
        <source>Link to Game and Transmit Position</source>
        <translation>Połącz z grami i nadawaj pozycję graczy</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="26"/>
        <source>Enable plugins and transmit positional information</source>
        <translation>Włącza wtyczki oraz nadaje informacje o pozycjach graczy względem siebie podczas gry</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="0"/>
        <source>This enables plugins for supported games to fetch your in-game position and transmit that with each voice packet. This enables other players to hear your voice in-game from the direction your character is in relation to their own.</source>
        <translation type="obsolete"> Uaktywnia to wtyczki, które przetwarzają dźwięk w zależności od położenia użytkownika na mapie, dzięki czemu możesz usłyszeć użytkowników ze względu na położenie na mapie. Ta funckja jest dostępna tylko do wybranych gier.</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="82"/>
        <source>&amp;Reload plugins</source>
        <translation>&amp;Przeładuj wtyczki</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="76"/>
        <source>Reloads all plugins</source>
        <translation>Przeładowuje wszystkie wtyczki</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="29"/>
        <source>This allows plugins for supported games to fetch your in-game position and transmit it with each voice packet. This enables other users to hear your voice in-game from the direction your character is in relation to their own.</source>
        <translation>Zezwala wtyczkom dla wspieranych gier pobierać twoją pozycję oraz wysyłać ją razem z pakietami dźwięku. Inni użytkownicy będą cię słyszeć z kierunku, w którym znajduje się twoja postać w grze (relatywnie do pozycji ich postaci).</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="79"/>
        <source>This rescans and reloads plugins. Use this if you just added or changed a plugin to the plugins directory.</source>
        <translation>Ponownie skanuje i przeładowuje wtyczki. Użyj tej opcji jeżeli dodałeś lub zmieniłeś wtyczkę w katalogu wtyczek.</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="108"/>
        <source>&amp;About</source>
        <translation>&amp;O wtyczce</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="102"/>
        <source>Information about plugin</source>
        <translation>Informacje o wtyczce</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="105"/>
        <source>This shows a small information message about the plugin.</source>
        <translation>Wyświetla krótką informację na temat wtyczki.</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="121"/>
        <source>&amp;Configure</source>
        <translation>&amp;Konfiguruj</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="115"/>
        <source>Show configuration page of plugin</source>
        <translation>Otwiera okno konfiguracji</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="118"/>
        <source>This shows the configuration page of the plugin, if any.</source>
        <translation>Wyświetla okno z konfiguracją wtyczki, jeżeli wtyczka posiadą konfigurację.</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="Plugins.cpp" line="124"/>
        <source>Plugin has no configure function.</source>
        <translation>Wtyczka nie posiada konfiguracji.</translation>
    </message>
    <message>
        <location filename="Plugins.cpp" line="138"/>
        <source>Plugin has no about function.</source>
        <translation>Brak informacji o wtyczce.</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="14"/>
        <source>Form</source>
        <translation>Formularz</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="61"/>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <location filename="Plugins.ui" line="66"/>
        <source>Enabled</source>
        <translation>Włączona</translation>
    </message>
</context>
<context>
    <name>Plugins</name>
    <message>
        <location filename="Plugins.cpp" line="568"/>
        <source>Downloaded new or updated plugin to %1.</source>
        <translation>Pobrano nowy lub uaktualniony plugin do %1.</translation>
    </message>
    <message>
        <location filename="Plugins.cpp" line="570"/>
        <source>Failed to install new plugin to %1.</source>
        <translation>Nie udało się zainstalować nowego pluginu do %1.</translation>
    </message>
    <message>
        <location filename="Plugins.cpp" line="338"/>
        <source>%1 lost link.</source>
        <translation>%1 utracił połączenie.</translation>
    </message>
    <message>
        <location filename="Plugins.cpp" line="385"/>
        <source>%1 linked.</source>
        <translation>%1 połączony.</translation>
    </message>
</context>
<context>
    <name>PortAudioSystem</name>
    <message>
        <location filename="PAAudio.cpp" line="275"/>
        <source>Default Device</source>
        <translation>Domyślne urządzenie</translation>
    </message>
</context>
<context>
    <name>PulseAudioSystem</name>
    <message>
        <location filename="PulseAudio.cpp" line="549"/>
        <source>Default Input</source>
        <translation>Domyślne wejście</translation>
    </message>
    <message>
        <location filename="PulseAudio.cpp" line="550"/>
        <source>Default Output</source>
        <translation>Domyślne wyjście</translation>
    </message>
</context>
<context>
    <name>RichTextEditor</name>
    <message>
        <location filename="RichTextEditor.cpp" line="241"/>
        <source>Failed to load image</source>
        <translation>Nie udało się załadować obrazka</translation>
    </message>
    <message>
        <location filename="RichTextEditor.cpp" line="241"/>
        <source>Image file too large to embed in document. Please use images smaller than %1 kB.</source>
        <translation>Obrazek jest zbyt duży, aby umieścić go w dokumencie. Prosimy używać obrazków mniejszych niż %1 kB.</translation>
    </message>
    <message>
        <location filename="RichTextEditor.cpp" line="322"/>
        <source>Message is too long.</source>
        <translation>Wiadomość jest za długa.</translation>
    </message>
    <message>
        <location filename="RichTextEditor.cpp" line="0"/>
        <source>TabWidget</source>
        <translation type="obsolete">TabWidget</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="24"/>
        <source>Display</source>
        <translation>Podgląd</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="41"/>
        <source>Source Text</source>
        <translation>Tekst źródłowy</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="58"/>
        <source>&amp;Bold</source>
        <translation>&amp;Pogrubienie</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="61"/>
        <source>Ctrl+B</source>
        <translation>Ctrl+B</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="73"/>
        <source>&amp;Italic</source>
        <translation>&amp;Kursywa</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="76"/>
        <source>Italic</source>
        <translation>Kursywa</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="79"/>
        <source>Ctrl+I</source>
        <translation>Ctrl+I</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="91"/>
        <source>Underline</source>
        <translation>Podkreślenie</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="94"/>
        <source>Ctrl+U</source>
        <translation>Ctrl+U</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="99"/>
        <source>Color</source>
        <translation>Kolor</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="108"/>
        <source>Insert Link</source>
        <translation>Wstaw link</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="111"/>
        <source>Ctrl+L</source>
        <translation>Ctrl+L</translation>
    </message>
    <message>
        <location filename="RichTextEditor.ui" line="120"/>
        <source>Insert Image</source>
        <translation>Wstaw obrazek</translation>
    </message>
</context>
<context>
    <name>RichTextEditorLink</name>
    <message>
        <location filename="RichTextEditorLink.ui" line="14"/>
        <source>Add Link</source>
        <translation>Dodaj link</translation>
    </message>
    <message>
        <location filename="RichTextEditorLink.ui" line="20"/>
        <source>URL</source>
        <translation>URL</translation>
    </message>
    <message>
        <location filename="RichTextEditorLink.ui" line="33"/>
        <source>Text</source>
        <translation>Tekst</translation>
    </message>
</context>
<context>
    <name>ServerHandler</name>
    <message>
        <location filename="ServerHandler.cpp" line="394"/>
        <source>UDP packets cannot be sent to or received from the server. Switching to TCP mode.</source>
        <translation>Pakiety UDP nie mogły zostać wysłane lub odebrane z serwera. Nastąpiła zmiana na tryb TCP.</translation>
    </message>
    <message>
        <location filename="ServerHandler.cpp" line="396"/>
        <source>UDP packets cannot be sent to the server. Switching to TCP mode.</source>
        <translation>Pakiety UDP nie mogły zostać wysłane do serwera. Nastąpiła zmiana na tryb TCP.</translation>
    </message>
    <message>
        <location filename="ServerHandler.cpp" line="398"/>
        <source>UDP packets cannot be received from the server. Switching to TCP mode.</source>
        <translation>Pakiety UDP nie mogły zostać odebrane z serwera. Nastąpiła zmiana na tryb TCP.</translation>
    </message>
    <message>
        <location filename="ServerHandler.cpp" line="405"/>
        <source>UDP packets can be sent to and received from the server. Switching back to UDP mode.</source>
        <translation>Pakiety UDP mogą zostać wysłane i odebrane z serwera. Przywrócono tryb UDP.</translation>
    </message>
    <message>
        <location filename="ServerHandler.cpp" line="434"/>
        <source>Connection timed out</source>
        <translation>Przekroczono limit czasu połączenia</translation>
    </message>
</context>
<context>
    <name>ServerView</name>
    <message>
        <location filename="ConnectDialog.cpp" line="73"/>
        <source>Favorite</source>
        <translation>Ulubione</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="79"/>
        <source>LAN</source>
        <translation>LAN</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="87"/>
        <source>Public Internet</source>
        <translation>Publiczne</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="93"/>
        <source>Africa</source>
        <translation>Afryka</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="94"/>
        <source>Asia</source>
        <translation>Azja</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="95"/>
        <source>North America</source>
        <translation>Ameryka Północna</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="96"/>
        <source>South America</source>
        <translation>Ameryka Południowa</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="97"/>
        <source>Europe</source>
        <translation>Europa</translation>
    </message>
    <message>
        <location filename="ConnectDialog.cpp" line="98"/>
        <source>Oceania</source>
        <translation>Oceania</translation>
    </message>
</context>
<context>
    <name>ShortcutActionWidget</name>
    <message>
        <location filename="GlobalShortcut.cpp" line="214"/>
        <source>Unassigned</source>
        <translation>Nieprzypisana</translation>
    </message>
</context>
<context>
    <name>ShortcutDelegate</name>
    <message>
        <location filename="GlobalShortcut.cpp" line="574"/>
        <source>On</source>
        <translation>Włącz</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="576"/>
        <source>Off</source>
        <translation>Wyłącz</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="578"/>
        <source>Toggle</source>
        <translation>Przełączanie</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="584"/>
        <source>Unassigned</source>
        <translation>Nieprzypisana</translation>
    </message>
</context>
<context>
    <name>ShortcutKeyWidget</name>
    <message>
        <location filename="GlobalShortcut.cpp" line="150"/>
        <source>Press Shortcut</source>
        <translation>Naciśnij klawisz</translation>
    </message>
</context>
<context>
    <name>ShortcutTargetDialog</name>
    <message>
        <location filename="GlobalShortcut.cpp" line="353"/>
        <source>Root</source>
        <translation>Źródło</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="358"/>
        <source>Parent</source>
        <translation>Macierzysty</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="363"/>
        <source>Current</source>
        <translation>Obecny</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="368"/>
        <source>Subchannel #%1</source>
        <translation>Pod-kanał #%1</translation>
    </message>
</context>
<context>
    <name>ShortcutTargetWidget</name>
    <message>
        <location filename="GlobalShortcut.cpp" line="455"/>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="493"/>
        <source>, </source>
        <translation>,</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="499"/>
        <source>Root</source>
        <translation>Źródło</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="501"/>
        <source>Parent</source>
        <translation>Macierzysty</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="503"/>
        <source>Current</source>
        <translation>Obecny</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="505"/>
        <source>Subchannel #%1</source>
        <translation>Pod-kanał #%1</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="512"/>
        <source>Invalid</source>
        <translation>Nieprawidłowy</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="515"/>
        <source>&lt;Empty&gt;</source>
        <translation>&lt;Puste&gt;</translation>
    </message>
</context>
<context>
    <name>ShortcutToggleWidget</name>
    <message>
        <location filename="GlobalShortcut.cpp" line="254"/>
        <source>Off</source>
        <translation>Wyłącz</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="258"/>
        <source>Toggle</source>
        <translation>Przełączenie</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="262"/>
        <source>On</source>
        <translation>Włącz</translation>
    </message>
</context>
<context>
    <name>TextMessage</name>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Message to send</source>
        <translation type="obsolete">Wiadomość do wysłania</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Preview</source>
        <translation type="obsolete">Podgląd</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Send raw message</source>
        <translation type="obsolete">Wyślij nieprzetworzoną wiadomość</translation>
    </message>
    <message>
        <location filename="GlobalShortcut.cpp" line="0"/>
        <source>Disables html formating</source>
        <translation type="obsolete">Wyłącza formatowanie HTML</translation>
    </message>
    <message>
        <location filename="TextMessage.h" line="46"/>
        <source>Enter text</source>
        <translation>Wpisz tekst</translation>
    </message>
    <message>
        <location filename="TextMessage.ui" line="24"/>
        <source>If checked the message is recursively sent to all subchannels</source>
        <translation>Gdy zaznaczone wiadomość jest wysyłana do wszystkich pod-kanałów</translation>
    </message>
    <message>
        <location filename="TextMessage.ui" line="27"/>
        <source>Send recursively to subchannels</source>
        <translation>Wyślij do wszystkich pod-kanałów</translation>
    </message>
</context>
<context>
    <name>Tokens</name>
    <message>
        <location filename="Tokens.cpp" line="69"/>
        <source>Empty Token</source>
        <translation>Puste hasło</translation>
    </message>
    <message>
        <location filename="Tokens.ui" line="14"/>
        <source>Mumble - Access Tokens</source>
        <translation>Mumble - Hasła dostępu</translation>
    </message>
    <message>
        <location filename="Tokens.ui" line="20"/>
        <source>List of access tokens on current server</source>
        <translation>Lista haseł dostępu na obecnym serwerze</translation>
    </message>
    <message>
        <location filename="Tokens.ui" line="23"/>
        <source>&lt;b&gt;This is an editable list of access tokens on the connected server.&lt;/b&gt;
&lt;br /&gt;
An access token is a text string, which can be used as a password for very simple access management on channels. Mumble will remember the tokens you&apos;ve used and resend them to the server next time you reconnect, so you don&apos;t have to enter these every time.
</source>
        <translation>&lt;b&gt;To jest edytowalna lista haseł użytych na serwerze.&lt;/b&gt;&lt;br /&gt;Hasło dostępu to tekst, który może być użyty jako hasło służące do bardzo łatwego zarządzania dostępem do kanałów. Mumble będzie pamiętać hasła, które użyłeś i prześle je na serwer ponownie podczas łączenia żeby nie trzeba było każdorazowego wpisywać haseł.</translation>
    </message>
    <message>
        <location filename="Tokens.ui" line="47"/>
        <source>Add a token</source>
        <translation>Dodaj hasło</translation>
    </message>
    <message>
        <location filename="Tokens.ui" line="50"/>
        <source>&amp;Add</source>
        <translation>&amp;Dodaj</translation>
    </message>
    <message>
        <location filename="Tokens.ui" line="57"/>
        <source>Remove a token</source>
        <translation>Usuń hasło</translation>
    </message>
    <message>
        <location filename="Tokens.ui" line="60"/>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
</context>
<context>
    <name>UserEdit</name>
    <message>
        <location filename="UserEdit.ui" line="20"/>
        <source>Registered Users</source>
        <translation>Zarejestrowani użytkownicy</translation>
    </message>
    <message>
        <location filename="UserEdit.ui" line="26"/>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <location filename="UserEdit.cpp" line="91"/>
        <source>Rename</source>
        <translation>Zmień nazwę</translation>
    </message>
</context>
<context>
    <name>UserInformation</name>
    <message>
        <location filename="UserInformation.ui" line="14"/>
        <source>User Information</source>
        <translation>Informacje o użytkowniku</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="20"/>
        <source>Connection Information</source>
        <translation>Informacje o połączeniu</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="26"/>
        <source>Version</source>
        <translation>Wersja</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="52"/>
        <source>OS</source>
        <translation>System</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="78"/>
        <source>Certificate</source>
        <translation>Certyfikat</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="104"/>
        <source>IP Address</source>
        <translation>Adres IP</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="127"/>
        <source>CELT Versions</source>
        <translation>Wersja CELT</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="165"/>
        <source>Details...</source>
        <translation>Szczegóły...</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="175"/>
        <source>Ping Statistics</source>
        <translation>Statystyki opóźnień</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="181"/>
        <source>Pings recieved</source>
        <translation>Odebrane</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="191"/>
        <source>Average ping</source>
        <translation>Średnie opóźnienie</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="211"/>
        <source>TCP (Control)</source>
        <translation>TCP (Kontrola)</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="257"/>
        <source>UDP (Voice)</source>
        <translation>UDP (Głos)</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="306"/>
        <source>UDP Network statistics</source>
        <translation>Statystyka sieci UDP</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="312"/>
        <source>Good</source>
        <translation>Dobre</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="322"/>
        <source>Late</source>
        <translation>Opóźnione</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="332"/>
        <source>Lost</source>
        <translation>Utracone</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="342"/>
        <source>Resync</source>
        <translation>Re-synchronizowane</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="352"/>
        <source>From Client</source>
        <translation>Od klienta</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="411"/>
        <source>To Client</source>
        <translation>Do klienta</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="473"/>
        <source>Bandwidth</source>
        <comment>GroupBox</comment>
        <translation>Połączenie</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="502"/>
        <source>Bandwidth</source>
        <comment>Label</comment>
        <translation>Przepustowość</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="0"/>
        <source>Bandwidth</source>
        <translation type="obsolete">Przepustowość</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="479"/>
        <source>Connection time</source>
        <translation>Czas połączenia</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="88"/>
        <source>%1w</source>
        <translation>%1w</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="90"/>
        <source>%1d</source>
        <translation>%1d</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="92"/>
        <source>%1h</source>
        <translation>%1h</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="94"/>
        <source>%1m</source>
        <translation>%1m</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="95"/>
        <source>%1s</source>
        <translation>%1s</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="163"/>
        <source>, </source>
        <translation>,</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="150"/>
        <source>%1.%2.%3 (%4)</source>
        <translation>%1.%2.%3 (%4)</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="151"/>
        <source>%1 (%2)</source>
        <translation>%1 (%2)</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="196"/>
        <source>%1 online (%2 idle)</source>
        <translation>%1 online (%2 bezczynny)</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="198"/>
        <source>%1 online</source>
        <translation>%1 online</translation>
    </message>
    <message>
        <location filename="UserInformation.cpp" line="203"/>
        <source>%1 kbit/s</source>
        <translation>%1 kbit/s</translation>
    </message>
    <message>
        <location filename="UserInformation.ui" line="201"/>
        <source>Ping deviation</source>
        <translation>Odchylenie</translation>
    </message>
</context>
<context>
    <name>UserModel</name>
    <message>
        <location filename="UserModel.cpp" line="577"/>
        <source>This is a user connected to the server. The icon to the left of the user indicates whether or not they are talking:</source>
        <translation>To jest użytkownik podłączony do serwera. Ikona po lewej wskazuje czy w chwili obecnej:</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="578"/>
        <source>Talking to your channel.</source>
        <translation>Mówi do twojego kanału.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="579"/>
        <source>Whispering directly to your channel.</source>
        <translation>Szepcze bezpośrednio do twojego kanału.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="580"/>
        <source>Whispering directly to you.</source>
        <translation>Szepcze bezpośrednio do ciebie.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="582"/>
        <source>Not talking.</source>
        <translation>Nie mówi.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="589"/>
        <source>This is a channel on the server. The icon indicates the state of the channel:</source>
        <translation>To jest kanał na serwerze. Ikona wskazuje stan kanału:</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="590"/>
        <source>Your current channel.</source>
        <translation>Twój obecny kanał.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="591"/>
        <source>A channel that is linked with your channel. Linked channels can talk to each other.</source>
        <translation>Kanał, z którym twój kanał jest połączony. Połączone kanały mogą rozmawiać między sobą.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="593"/>
        <source>A channel on the server that you are not linked to.</source>
        <translation>Kanał na serwerze, do którego nie jesteś połączony.</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="608"/>
        <source>This shows the flags the user has on the server, if any:</source>
        <translation>Wyświetla uprawnienia użytkownika, o ile jakieś posiada:</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="609"/>
        <source>On your friend list</source>
        <translation>Twój znajomy</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="610"/>
        <source>Authenticated user</source>
        <translation>Użytkownik uwierzytelniony</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="611"/>
        <source>Muted (manually muted by self)</source>
        <translation>Wyciszony (przez siebie)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="612"/>
        <source>Muted (manually muted by admin)</source>
        <translation>Wyciszony (ręcznie wyciszony przez administratora)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="613"/>
        <source>Muted (not allowed to speak in current channel)</source>
        <translation>Wyciszony (brak uprawnień mowy na tym kanale)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="615"/>
        <source>Muted (muted by you, only on your machine)</source>
        <translation>Wyciszony (przez ciebie, tylko na twojej maszynie)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="616"/>
        <source>Deafened (by self)</source>
        <translation>Ogłuszony (przez siebie)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="617"/>
        <source>Deafened (by admin)</source>
        <translation>Ogłuszony (przez administratora)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="618"/>
        <source>User has a new comment set (click to show)</source>
        <translation>Użytkownik ma nowy komentarz (kliknij, aby wyświetlić)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="620"/>
        <source>User has a comment set, which you&apos;ve already seen. (click to show)</source>
        <translation>Użytkownik posiada komentarz, który już widziałeś (kliknij, aby wyświetlić)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="626"/>
        <source>This shows the flags the channel has, if any:</source>
        <translation>Wyświetla atrybuty kanału, o ile jakieś posiada:</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="627"/>
        <source>Channel has a new comment set (click to show)</source>
        <translation>Kanał ma nowy komentarz (kliknij, aby wyświetlić)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="629"/>
        <source>Channel has a comment set, which you&apos;ve already seen. (click to show)</source>
        <translation>Kanał ma komentarz, który już widziałeś (kliknij, aby wyświetlić)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="646"/>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="648"/>
        <source>Flags</source>
        <translation>Atrybut(y)</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="0"/>
        <source>Mumble</source>
        <translation type="obsolete">Mumble</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="1376"/>
        <source>Are you sure you want to drag this channel?</source>
        <translation>Czy jesteś pewien, że chcesz przeciągnąć ten kanał?</translation>
    </message>
    <message>
        <location filename="UserModel.cpp" line="1489"/>
        <source>Cannot perform this movement automatically, please reset the numeric sorting indicators or adjust it manually.</source>
        <translation>Nie można przenieść automatycznie, prosimy o posortowanie numeryczne wskaźników lub ręczne ustawienie.</translation>
    </message>
</context>
<context>
    <name>VersionCheck</name>
    <message>
        <location filename="UserModel.cpp" line="0"/>
        <source>Mumble failed to retrieve version information from the SourceForge server.</source>
        <translation type="obsolete">Nie udało się pobrać informacji o wersji z serwera SourceForge.</translation>
    </message>
    <message>
        <location filename="VersionCheck.cpp" line="130"/>
        <source>Upgrade Mumble</source>
        <translation>Aktualizacja Mumble</translation>
    </message>
    <message>
        <location filename="VersionCheck.cpp" line="131"/>
        <source>A new version of Mumble has been detected and automatically downloaded. It is recommended that you either upgrade to this version, or downgrade to the latest stable release. Do you want to launch the installer now?</source>
        <translation>Nowa wersja Mumbe została wykryta oraz automatycznie pobrana. Zalecana jest aktualizacja do tej wersji lub powrót do ostatniej stabilnej wersji. Uruchomić instalator teraz?</translation>
    </message>
    <message>
        <location filename="VersionCheck.cpp" line="149"/>
        <source>Corrupt download of new version detected. Automatically removed.</source>
        <translation>Pobrany plik jest uszkodzony. Został on automatycznie usunięty.</translation>
    </message>
    <message>
        <location filename="VersionCheck.cpp" line="154"/>
        <source>Downloading new snapshot from %1 to %2</source>
        <translation>Pobieranie nowej wersji testowej z %1 do %2</translation>
    </message>
    <message>
        <location filename="VersionCheck.cpp" line="172"/>
        <source>Failed to write new version to disc.</source>
        <translation>Zapis nowej wersji Mumble na dysk nie powiódł się.</translation>
    </message>
    <message>
        <location filename="VersionCheck.cpp" line="189"/>
        <source>Mumble failed to retrieve version information from the central server.</source>
        <translation>Mumble nie był w stanie pobrać informacji o wersji z serwera głównego.</translation>
    </message>
    <message>
        <location filename="VersionCheck.cpp" line="144"/>
        <source>Failed to launch snapshot installer.</source>
        <translation>Uruchomienie instalatora wersji testowej nie powiodło się.</translation>
    </message>
</context>
<context>
    <name>ViewCert</name>
    <message>
        <location filename="ViewCert.cpp" line="36"/>
        <source>Certificate Chain Details</source>
        <translation>Szczegóły certyfikatu</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="42"/>
        <source>Certificate chain</source>
        <translation>Certyfikat</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="51"/>
        <source>Certificate details</source>
        <translation>Szczegóły certyfikatu</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="48"/>
        <source>%1 %2</source>
        <translation>%1 %2</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="107"/>
        <source>Common Name: %1</source>
        <translation>Nazwa pospolita: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="108"/>
        <source>Organization: %1</source>
        <translation>Organizacja: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="81"/>
        <source>Subunit: %1</source>
        <translation>Pod-jednostka: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="110"/>
        <source>Country: %1</source>
        <translation>Kraj: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="111"/>
        <source>Locality: %1</source>
        <translation>Lokalizacja: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="112"/>
        <source>State: %1</source>
        <translation>Kraj: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="85"/>
        <source>Valid from: %1</source>
        <translation>Ważny od: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="86"/>
        <source>Valid to: %1</source>
        <translation>Ważny do: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="87"/>
        <source>Serial: %1</source>
        <translation>Numer seryjny: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="88"/>
        <source>Public Key: %1 bits %2</source>
        <translation>Klucz publiczny: %1 bitów %2</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="88"/>
        <source>RSA</source>
        <translation>RSA</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="88"/>
        <source>DSA</source>
        <translation>DSA</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="89"/>
        <source>Digest (MD5): %1</source>
        <translation>Odcisk (MD5): %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="93"/>
        <source>Email: %1</source>
        <translation>Email: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="97"/>
        <source>DNS: %1</source>
        <translation>DNS: %1</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="106"/>
        <source>Issued by:</source>
        <translation>Wydany przez:</translation>
    </message>
    <message>
        <location filename="ViewCert.cpp" line="109"/>
        <source>Unit Name: %1</source>
        <translation>Nazwa jednostki: %1</translation>
    </message>
</context>
<context>
    <name>WASAPISystem</name>
    <message>
        <location filename="WASAPI.cpp" line="172"/>
        <source>Default Device</source>
        <translation>Urządzenie domyślne</translation>
    </message>
</context>
</TS>
