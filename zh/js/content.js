var contentData =
{
	"vertices-and-edges": {

		"content-title": "顶点和边",

		"theory-content":		"<div><span style: 'whitespace: nowrap'>图是一个<\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 4; margin-right: 0 position:relative'><g><circle cx='15' cy='15' r='10' fill='#1f77b4'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><circle cx='15' cy='15' r='10' fill='#ff7f0e'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 4; position:relative'><g><circle cx='15' cy='15' r='10' fill='#2ca02c'/></g></svg><\/span><span style: 'whitespace: nowrap'>通过边<\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 4; margin-right: 0 position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'><svg width=30 height=30 xml:space='preserve' style='margin-left: 0; margin-right: 0; position:relative'><g><line x1='5' y1='25' x2='25' y2='5' stroke='#888' stroke-width='2px' stroke-linecap='round' stroke-linejoin='round'/></g></svg><\/span><span style: 'whitespace: nowrap'>互联的集合。 我们常常使用 \\(V\\) 表示所有顶点的集合，用 \\(E\\) 表示所有边的集合。<\/p><p>没明白？ 简而言之：图有 2 个组件 - <b>顶点的集合<\/b> \\(V\\) 和 <b>边的集合<\/b> \\(E\\)。边连接 2 个顶点。<\/p><p>如果一条边连接顶点 \\(v_1\\) 和 \\(v_2\\)，那么我们使用 \\(v_1v_2\\) 来表示这条边，也等价于 \\(v_2v_1\\)。<\/p><p>2 个顶点应该是 <b>相邻的<\/b> 如果他们通过一条边相连。<\/p><p>现在阅读下面的说明，创建你自己的图。你将在图形区域下面看到相应的 \\(V\\) 和 \\(E\\) 的集合。 请开始你的表演，制作你想要的图。<\/span><\/div>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output":		"",

		"prev":		"index.html",
		"next":		"?order-and-size",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"order-and-size": {

		"content-title": "阶数和边数",

		"theory-content":		"<p><b>阶数<\/b>是图的所有顶点数量。<\/p><p><b>边数<\/b>是图的所有边数量。<\/p><p>创建一些图，并观察他们的阶数和边数。自己去尝试习惯这些表达。<\/p><p> 现在清空图，并创建一些顶点 (称之为 \\(n\\))。 尝试使用这些顶点获得最大边数。也可以尝试不同的 \\(n\\)。<\/p><p> 注意到了什么？ 阶数为 \\(n\\) 的图的边数可能是多少？<\/p><div class=\"hint\"> <span class=\"hint-word\">线索： <\/span>最大边数出现在所有顶点相连时。<\/div><p> 答案在下面。下不要看它，清除画布，并多尝试几次。<\/p><div class=\"toggle-container\"> <span class=\"toggle-link target-hidden\">显示答案<\/span> <div class=\"toggle-content\"> <p> 答案是 \\(\\frac{n(n-1)}{2}\\)。 <\/p><p> 但是为什么？因为你绘制的最大边数与你能选择 2 个顶点的全部方式数量相同。<\/p><p> 所以让我们选择第一个顶点并叫它 \\(a\\)。我们有 \\(n\\) 种方式选择 \\(a\\)。选择下一个顶点，我们剩下 \\(n-1\\) 个顶点。 所以我们选择 2 个顶点有 \\(n(n-1)\\) 种方式，对吗？<\/p><p> 不，这是因为我们对于每个顶点重复计算了 1 次。比如先选择 \\(b\\) 而后选择 \\(a\\)？明白了？记住 \\(ab\\) 和 \\(ba\\) 表示同一条边。<\/p><p> 因此我们除于 \\(2\\) 然后得到 \\(\\frac{n(n-1)}{2}\\) 作为答案。 <\/p><\/div><\/div>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output":		"",

		"prev":		"?vertices-and-edges",
		"next":		"?degree-of-vertex",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"degree-of-vertex": {

		"content-title": "顶点的度",

		"theory-content":		"<p>顶点的<b>度<\/b>是落入其中的边的数量。它能告诉我们有多少个顶点与之相邻。<\/p><p> 在图中，我们将每个顶点的度都标记上。 做一些改变，看看度的变化。 <\/p><p> 顶点 \\(v\\) 的度用表示 \\(deg(v)\\)。伴随着 \\(deg(v)=0\\) 的顶点是独狼 &mdash; 独立于其他任何一个。我们对于它有个特殊的名字 <\/p><p><b>0 度<\/b>的顶点被称之为 <b>独立点。<\/b> 他们没有其他顶点与之相连。<\/p><p>图的最小度 \\(G\\) 使用 \\(\\delta(G)\\) 来表示。其中最大的使用 \\(\\Delta(G)\\)来表示。 为了避免混乱，把 \\(\\delta\\) 记作 \"small delta\" 而 \\(\\Delta\\) 记作 \"big delta\"。<\/p><div class=\"note\"> <span class=\"note-word\">注意:<\/span> 记住 \\(\\delta\\) 和 \\(\\Delta\\) 是图的属性，而 \\(deg\\) 是顶点的。 <\/div>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output":		"",

		"prev":		"?order-and-size",
		"next":		"?degree-sequence",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"degree-sequence": {

		"content-title": "度序列",

		"theory-content":		"<p><b>度序列<\/b>是图上所有顶点的度的列表。通常我们使用<b>递减顺序<\/b>列出，从最大到最小。<\/p><div class=\"note\"> <span class=\"note-word\">注意：<\/span>度序列是始终递减。因此,每个图都有一个<b>唯一的度序列。<\/b> <\/div><p> 在画布上，每个顶点都标记了其度数。绘制一些图来观察其度序列。<\/p><p>你将会发现度序列的和是图的边数的 2倍。事实上，这是一个数学结论（定理）。 <\/p><div class=\"result\"> <span class=\"result-word\">定理：<\/span>所有顶点的度数之和等于图的边数的 2 倍。<p> 公式, \\[\\sum deg(v_i)=2|E|\\] \\(|E|\\) 代表图中边的数量。 <\/p><\/div><p> 这背后的原因非常简单。一条边是一个两个顶点之间的联系。所以每个边缘贡献22度总和。因此,总和必须边的数量的 \\(2\\) 倍。<\/p>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output":		"",

		"prev":		"?degree-of-vertex",
		"next":		"?graphic-sequence",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"graphic-sequence": {

		"content-title": "图序列",

		"theory-content":		"<p>如果我们可以构建一个数字序列作为度序列的图，那么一串数字被认为是一个<b>图序列<\/b>。 <\/p><p> 好的，这有点令人困惑。 那么又是什么图形序列？ <\/p><p> 假设你有一个数字列表。 将每个数字分配给一个孤立的顶点。 现在，是否可以连接这些顶点，使每个顶点与分配给它的数字相邻的顶点数多少？ 如果是，那么数字列表就是图。 否则不是。 则不是图。 <\/p><p> <b>例 1:<\/b> 序列 \\((3,3,2,1,1,0)\\) 是一个图。 在右侧画板中，可以看到顶点具有这些数字作为他们的度数。 请注意，即使删除 \\(0\\)，该序列仍可以构建图。 . <\/p><div class=\"note\"> <span class=\"note-word\">注意:<\/span> 只包含零的序列总是图。 <\/div><p> <b>例 2:<\/b> 序列 \\((4,3,2,1)\\) 不是图。 我们至少需要其他四个顶点来满足以 \\(4\\) 为度的顶点的度数。 但我们只有三个。 <\/p><p> <b>例 3:<\/b> 序列 \\((4,3,3,2,2,1)\\) 也不是图。 回想一下，度数的总和是边数的<b>两倍<\/b>。 所以图形序列的总和必须是偶数。 这里不是这种情况。 <\/p><p> 以下序列是图形。 试着为他们中的每一个绘制一张图。 您可以点击旁边的链接查看答案。 <\/p><p> \\((5,1,1,1,1,1)\\) <span class=\"graph-event-link\" id=\"prob0\"> 显示答案<\/span> <\/p><p> \\((2,2,2,2,2)\\) <span class=\"graph-event-link\" id=\"prob1\"> 显示答案<\/span> <\/p><p> \\((4,4,4,4,4,0)\\) <span class=\"graph-event-link\" id=\"prob2\"> 显示答案<\/span> <\/p><p> \\((3,3,2,2,2)\\) <span class=\"graph-event-link\" id=\"prob3\"> 显示答案<\/span> <\/p><p> \\((5,3,3,3,2,2)\\) <span class=\"graph-event-link\" id=\"prob4\"> 显示答案<\/span> <\/p><div class=\"note\"> <span class=\"note-word\">注意:<\/span> 图具有唯一的度数序列。 但是对于相同的图序列，可能有多个不同的图表。 <\/div>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output":		"",

		"prev":		"?degree-sequence",
		"next":		"?havel-hakimi",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"havel-hakimi": {

		"content-title": "Havel-Hakimi Algorithm",

		"theory-content":		"<p>It is a difficult task to determine whether a sequence is graphic or not. The Havel-Hakimi Theorem makes the task a lot easier. <\/p><p>Go through the theorem or you can skip it and jump on to the algorithm at the bottom.<\/p><div class=\"result\"> <span class=\"result-word\">Havel-Hakimi Th: <\/span> The decreasing sequence \\[(d_1, d_2, ..., d_n)\\] is graphic if and only if the sequence \\[ (d_2-1, d_3-1, ..., d_{d_1+1}-1, \\\\d_{d_1+2}, d_{d_1+3}, ..., d_n) \\] is also graphic. <\/div><p> See how the second sequence was built? The first sequence was decreasing, which means the highest degree in it is \\(d_1\\). We took the vertex having highest degree (\\(d_1\\)) and connected it to next \\(d_1\\) vertices with highest degrees. In the new degree sequence, we have exhausted first term of the previous sequence and decreased next \\(d_1\\) terms by one.<\/p><p> Now, the theorem says that either both the sequences are graphic or both are non-graphic. We can again apply the theorem on the new sequence to obtain yet another sequence. We can repeat this process till the problem reduces to an easy one. Thus all of the sequences obtained in this process will be graphic or none them would be.<\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> The sequence obtained after applying theorem might not be decreasing. In such a case, you will have to rearrange it in decreasing order before re-applying the theorem. <\/div><p> You can check this <a href=\"https:\/\/en.wikipedia.org\/wiki\/Havel%E2%80%93Hakimi_algorithm\" target=\"_blank\">Wikipedia link<\/a> for more information. You can search the internet for proof of the theorem. <\/p><div class=\"note\"><span class=\"note-word\">Note: <\/span> A sequence with all zeroes is graphic since we can always draw that many isolated vertices.<\/div><p>Your task now is to draw a graph for the each of the given graphic sequences. For this task, you can <b>use the following algorithm<\/b> which is based on the above theorem.<\/p><div class=\"result\"> <span class=\"result-word\">Algorithm: <\/span> <p><\/p><ol> <li>Pick the vertex with highest target degree. Lets call this value \\(k\\).<\/li><li>Connect this vertex to next \\(k\\) vertices having highest degree. Now this vertex has been exhausted.<\/li><li>Repeat steps 1 and 2 till you exhaust all the vertices.<\/li><li>If all the vertices get exhausted, then the sequence has reduced to all zeroes and hence the sequence is graphic.<\/li><li>If you end up with non-zero vertices that can't be exhausted further, then the sequence isn't graphic.<\/li><\/ol> <\/div><p>It is guaranteed that all the sequences in this exercise are graphic.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete an edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-edges\" class=\"btn btn-default\">Reset Edges<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a>1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><li><a>9<\/a><\/li><li><a>10<\/a><\/li><li><a>11<\/a><\/li><li><a>12<\/a><\/li><\/ul> <\/div>",

		"prev":		"?graphic-sequence",
		"next":		"?pigeonhole",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	},

	"pigeonhole": {

		"content-title": "鸽巢原理",

		"theory-content":		"<p> 鸽巢原理非常简单和直观,但其在离散数学中的应用非常频繁。<\/p><div class=\"result\"> <span class=\"result-word\">鸽巢原理: <\/span> 如果我们把 \\(n\\) 鸽子在不到 \\(n\\) 盒子,那么至少有一个鸽子洞包含一个以上的鸽子。<\/div><p> 可以使用 <i>物品<\/i>替换 <i>鸽子<\/i> 并用 <i>盒子<\/i> 替换 <i>巢穴<\/i>。 所以鸽巢问题说的是过量的物品和不足的盒子, 我们分发这些箱子中的所有项目, 那么至少一盒将有多个条目。<\/p><p> 困难的部分是应用这个定理。 你需要决定什么物体代表鸽子和鸽巢。<\/p><p> <b>例 1: <\/b> 你有没有注意到这些课程中只有十种不同颜色的顶点？ 所以如果图中有十个以上的顶点，那么至少有一对顶点具有相同的颜色！ 这十种颜色可以被认为是十个鸽子洞。 每个顶点都像一只鸽子。<\/p><div class=\"result\"> <span class=\"result-word\">例 2: <\/span> 在具有多于一个顶点的任何图中，至少有一对具有相同度的顶点。 <\/div><p> 这意味着你不能有一个图 \\(阶数 \\geq 2\\) 具有所有不同的程度。某些度肯定会重复。通过绘制图表来自己看 \\(阶数 \\geq 2\\).<\/p><p>但为什么会发生这种情况？ 试着想出一个解释。 您可以通过尝试绘制具有不同度数的所有顶点的图形来帮助自己。 <\/p><div class=\"hint\"> <span class=\"hint-word\">提示: <\/span> 假设 \\(阶数=n\\) 并且考虑度的范围 \\(n\\). <\/div><div class=\"toggle-container\"> <span class=\"toggle-link target-hidden\">点击查看解释<\/span> <div class=\"toggle-content\"> <p> 假定我们有一个图 \\(阶数=n\\)。 顶点可以连接到最大 \\(n-1\\) 个其他顶点。所以 \\(0 \\leq deg(v_i) \\leq n-1\\). <\/p><p> It appears that for our \\(n\\) vertices, there are \\(n\\) choices for degree (from \\(0\\) to \\(n-1\\)). So, if we treat distinct degrees as pigeonholes and the vertices as pigeons, shouldn't \\(n\\) disctinct degrees should be possible then? <\/p><p> No. Our further observations reveal why. <\/p><p> Notice that in a graph of order \\(n\\), vertices with degrees \\(0\\) and \\(n-1\\) cannot exist simultaneously. <\/p><p> If there exists a vertex with degree \\(0\\), it means that this vertex is not connected to any other vertex. Hence, a vertex cannot be connected to all the \\(n-1\\) other vertices. So we get \\(0 \\leq deg(v_i) \\leq n-2\\) in this case. <\/p><p> If there exists a vertex with degree \\(n-1\\), then this vertex is connected to all \\(n-1\\) other vertices. Therefore, there cannot be an isolated vertex. So we get \\(1 \\leq deg(v_i) \\leq n-1\\) in this case. <\/p><p> In both the above cases, we have \\(n\\) vertices (pigeons) but only \\(n-1\\) possible degrees (pigeonholes). So we're assured to have a pigeonhole (degree) with more than one pigeon (vertex). <\/p><\/div><\/div>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output": "",

		"prev":		"?havel-hakimi",
		"next":		"?regular-graph",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"regular-graph": {

		"content-title": "正则图",

		"theory-content":		"<p> 每个顶点的度相同的图称之为 <b>正则图<\/b>。 <\/p><p> 若每个顶点的度均为 \\(k\\) ，称为 \\(k\\mbox{-}正则图\\)。<\/p><p> 画板中展示了一个 \\(6\\) 阶的 \\(3\\mbox{-}正则图\\) . <\/p><p>试图构建以下正则图。<\/p><p>\\(1\\mbox{-}正则图\\) of order \\(2\\)<\/p><p>\\(1\\mbox{-}正则图\\) of order \\(6\\)<\/p><p>\\(2\\mbox{-}正则图\\) of order \\(3\\)<\/p><p>\\(2\\mbox{-}正则图\\) of order \\(5\\)<\/p><p>\\(4\\mbox{-}正则图\\) of order \\(5\\)<\/p><p>\\(4\\mbox{-}正则图\\) of order \\(6\\)<\/p><p>\\(4\\mbox{-}正则图\\) of order \\(7\\)<\/p><p>\\(5\\mbox{-}正则图\\) of order \\(6\\)<\/p><p> 没有提供解决上述问题的方法。你应该能够自己解决它们。如果您在绘制图表时遇到困难，您可以看到下面给出的提示。但你必须先尝试。<\/p><div class=\"hint toggle-container\"> <span class=\"toggle-link target-hidden\">点击查看<\/span> <div class=\"toggle-content\"> <span class=\"hint-word\">提示: <\/span> 找出正则图的度序列。 然后用 Havel-Hakimi 构建图表。 请注意，顶点中的文本代表其程度而不是目标程度。 <\/div><\/div><p> 现在给你一个小任务。 找出 \\(n\\) 阶 \\(k\\mbox{-}正则图\\) 中的边数。从构建和观察一个低阶的正则图开始。如果你没有得到它，下面是答案。<\/p><div class=\"result toggle-container\"> <span class=\"toggle-link target-hidden\">点击查看答案<\/span> <div class=\"toggle-content\"> \\[|E|=\\frac{nk}{2}\\] 这是从以下事实得出的：度数和是边数的两倍。 \\[\\sum deg(v_i)=2|E|\\] 度的总和是 \\(nk\\)。 <br>We also see that the sum of degrees (\\(nk\\)) will be an odd number when both \\(n\\) and \\(k\\) are odd. We cannot have number of edges as a fractional number, and therefore a regular graph with both \\(n\\) and \\(k\\) odd cannot exist. <\/div><\/div>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output": "",

		"prev":		"?pigeonhole",
		"next":		"?complete-graph",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"complete-graph": {

		"content-title": "完全图",

		"theory-content":		"<p> 图中每个顶点连接到其他顶点被称为一个 <b>完全图<\/b>。 <\/p><p> 请注意在 \\(n\\) 阶图上，每个顶点的度数 \\(n-1\\)。 <\/p><p> 所以我们可以说，一个 \\(n\\) 阶完全图是一个 \\(n\\)阶 \\((n-1)\\mbox{-}regular\\) 正则图。 <\/p><p>\\(n\\) 阶完全图使用 \\(K_n\\) 表示。<\/p><p> 画板展示了 \\(5\\) 阶完全图。 <\/p><p> 绘制几个完全图，并观察其边的数量。 <\/p><p> 您可能已经观察到完整图中的边数是 \\(\\frac{n(n-1)}{2}\\)。 这是可达的 \\(n\\)  阶图的最大边数在之前学习的 <a href=\"?order-and-size\">阶数和边数<\/a>中。 <\/p>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output": "",

		"prev":		"?regular-graph",
		"next":		"?bipartite",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"bipartite": {

		"content-title": "二分图",

		"theory-content":		"<p> A graph is said to be <b>bipartite<\/b> if we can divide the set of vertices in two disjoint sets such that there is no edge between vertices belonging to same set. <\/p><p>Let's break it down.<\/p><p> Here we are dividing set of vertices in two groups (or sets). Each vertex goes into one of these groups. This is like labelling each vertex either A or B. <\/p><p> Each vertex has only one label. So the two sets are <b>disjoint<\/b> i.e. the two sets don't have any vertex in common. <\/p><p> And there should not be any edge running within the same set. This means that every edge runs between two vertices belonging to different sets &mdash; one labelled as A and other as B. <\/p><p> So if we can label our vertices in such a way, then the graph is bipartite. Otherwise not. <\/p><p> Draw some graphs of your own to understand it better. <\/p><p> For a bipartite graph, the vertices of set \\(A\\) and \\(B\\) are shown in orange and green colors, respectively. If it isn't bipartite, the vertices will have usual colors. <\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> Isolated vertices do not influence whether the graph is bipartite or not. They can be ignored. <\/div><p> Isolated vertices are colored silver to show that these vertices are ignored. We can put them randomly in any set, and our graph would still be bipartite (or non-bipartite). <\/p><p>Were you paying attention to the sum of degrees of the two sets?<\/p><div class=\"result\"> <span class=\"result-word\">Theorem: <\/span>In a bipartite graph, the sum of degrees of vertices of each set is equal to the number of edges. \\[\\sum_{v \\in A}deg(v)=\\sum_{v \\in B}deg(v)=|E|\\] <\/div><p>Why does it holds true? Try to reason out yourself.<\/p>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output": "",

		"prev":		"?complete-graph",
		"next":		"?complete-bipartite",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"complete-bipartite": {

		"content-title": "完全二分图",

		"theory-content":		"<p> <b>Complete bipartite<\/b> graph is a special type of <a href=\"?bipartite\">bipartite graph<\/a> where every vertex of one set is connected to every vertex of other set. <\/p><p> The figure shows a bipartite graph where set \\(A\\) (orange-colored) consists of \\(2\\) vertices and set \\(B\\) (green-colored) consists of \\(3\\) vertices. <\/p><p> If the two sets have \\(p\\) and \\(q\\) number of vertices, then we denote the complete bipartite graph by \\(K_{p,q}\\). <\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> Don't confuse the notation \\(K_{p,q}\\) by \\(K_n\\). Former is used for complete bipartite graph, and later denotes a <a href=\"?complete-graph\">complete graph<\/a>. Both are different. <\/div><div class=\"result\"> <span class=\"result-word\">Properties: <\/span> The following results hold true for a complete bipartite graph \\(K_{p,q}\\). <p><\/p><ul> <li>The order of graph is \\(|V|=p+q\\).<\/li><li>The size of graph is \\(|E|=pq\\).<br>This can be used to check if a bipartite graph is complete bipartite or not.<\/li><li>The <a href=\"?degree-seqeunce\">degree sequence<\/a> is \\((p,p,...,p,q,...,q)\\) where \\(p\\) is repeated \\(q\\) times and \\(q\\) is repeated \\(p\\) times. It is assumed here that \\(p>q\\).<\/li><\/ul> <\/div>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output": "",

		"prev":		"?bipartite",
		"next":		"?walk",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"walk": {

		"content-title": "Walk",

		"theory-content":		"<p><b>Walk<\/b> is sequence of adjacent vertices (or edges) in a graph.<\/p><p> You can think of the vertices as cities and the edges as highways connecting them. You start at a city and start travelling to other cities. Then the route you travelled through can be called as a \"walk\". <\/p><p> To describe the route uniquely, you have to list down the cities and highways you travelled in that order. That's the idea of a walk. <\/p><div class=\"note\"> <span class=\"note-word\">Note:<\/span> You can't just list vertices (or edges) randomly and call it a walk. A subsequent vertex must be adjacent to the previous one. <\/div><p> While travelling the cities, you might have revisited some cities and might have travelled through the same highway multiple times. <\/p><p> Similarly, in a walk you can repeat the vertices and edges. <\/p><div class=\"note\"> <span class=\"note-word\">Note:<\/span> A walk can contain vertices and edges multiple times. However, in this app you won't be able to add the same edge again to the walk. <\/div><p>The number of edges in the walk is called as the <b>length<\/b> of the walk. It is one less than the number of vertices in the walk. Repeated edges (or vertices) are counted each time they appear in the walk.<\/p><p> Read the instructions below and create some walks of your own. Do this till you get what a walk is. <\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button>",

		"svg-output": "",

		"prev":		"?complete-bipartite",
		"next":		"?open-vs-closed",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"open-vs-closed": {

		"content-title": "Open vs Closed Walks",

		"theory-content":		"<p>This lesson describes some special types of walks. Get acquainted with them and play around. But note that the following terminology may differ from your textbook.<\/p><p>A walk is said to be <b>open<\/b> if the first and the last vertices are different i.e. the terminal vertices are different.<\/p><p>A walk is said to be <b>closed<\/b> if the first and last vertices are the same. That means you start walking at a vertex and end up at the same.<\/p><p>Before proceeding further, try drawing open and closed walks to understand them better. Below are some more terms you need to know.<\/p><p><b>Trail<\/b> is an open walk where vertices can repeat, but not edges.<\/p><p><b>Path<\/b> is an open walk with no repetition of vertices and edges.<\/p><p>If you make a trail (or path) closed by coinciding the terminal vertices, then what you end up with is called a circuit (or cycle).<\/p><p><b>Circuit<\/b> is a closed walk where vertices can repeat, but not edges. But since it is closed, only the first\/last vertex repeats.<\/p><p><b>Cycle<\/b> is a closed walk where neither vertices nor edges can repeat. But since it is closed, only the first\/last vertex repeats.<\/p><p>It is easy to confuse these terms with each other. So play around till you get comfortable. Remember that you won't be able to repeat edges in the app.<\/p><div class=\"note\"> <span class=\"note-word\">Note: <\/span> A path is a special type of trail where vertices don't repeat. Similarly, a cycle is a special type of circuit. <\/div>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button>",

		"svg-output": "",

		"prev":		"?walk",
		"next":		"?connectivity",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	},

	"connectivity": {

		"content-title": "连通性",

		"theory-content":		"<p>A graph is said to be <b>connected<\/b> if a path can be drawn between any two of its vertices. Otherwise, it is called <b>disconnected<\/b>.<\/p><p>Each maximal connected subgraph is called a <b>connected component<\/b> or just <b>component<\/b> of the graph.<\/p><p>Since a component is maximal connected:<\/p><ul> <li>No path can be draw between an \"outside\" vertex and any of the component's vertices.<\/li><li>There is a path from any vertex of the component to any other vertex of the component.<\/li><\/ul> <div class=\"note\"> <span class=\"note-word\">Note: <\/span> An <b>isolated vertex is a component<\/b> in the sense that there is no vertex in the component which isn't connected to it; and their is no \"outside\" vertex connected to it. <\/div><p>The diagram shows a disconnected graph having two components - blue and orange.<\/p><p>Draw some graphs of your own and get comfortable with the terms. Each component will have a color of its own.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex or edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button>",

		"svg-output": "",

		"prev":		"?open-vs-closed",
		"next":		"?eulerian-circuit",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"eulerian-circuit": {

		"content-title": "欧拉回路",

		"theory-content":		"<p>A circuit which visits each edge of the graph exactly once is called as <b>Eulerian circuit<\/b>. In other words, an <b>Eulerian circuit<\/b> is a closed walk which visits each edge of the graph exactly once.<\/p><p>A graph possessing an Eulerian circuit is known as <b>Eulerian graph<\/b>.<\/p><div class=\"result\"> <span class=\"result-word\">Theorem: <\/span> A connected graph is Eulerian if and only if the degree of every vertex is an even number. <\/div><p>Take note of the equivalency (<i>if and only if<\/i>) in above theorem. This means that:<\/p><ol> <li>If a connected graph has all its vertices of even degree, then it has an Eulerian circuit.<\/li><li>If a connected graph has an Eulerian circuit, then all its vertices have even degree.<\/li><\/ol> <div class=\"note\"> <span class=\"note-word\">Note: <\/span> Since a circuit is cyclic in nature, any vertex can be taken as the starting point for construction of an Eulerian circuit in an Eulerian graph. <\/div><p>Your task is to draw an Eulerian circuit for each of the given graphs.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><\/ul> <\/div>",

		"prev":		"?connectivity",
		"next":		"?eulerian-trail",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"eulerian-trail": {

		"content-title": "欧拉迹",

		"theory-content":		"<p>An open walk which visits each edge of the graph exactly once is called an <b>Eulerian Walk<\/b>. Since it is open and there is no repetition of edges, it is also called <b>Eulerian Trail<\/b>.<\/p><p>There is a connection between Eulerian Trails and Eulerian Circuits.<\/p><p>We know that in an Eulerian graph, it is possible to draw an Eulerian circuit starting from any vertex. What if we remove the last edge in this circuit? Can we still walk all the edges exactly once?<\/p><p>On removing the last edge, the two vertices on that edge will now have odd degrees. Rest of the vertices will still have even degree. Our circuit is no longer a circuit because the terminal vertices are different. What we have now is a trail that covers all the vertices exactly once.<\/p><div class=\"result\"> <p><span class=\"result-word\">Theorem: <\/span> A connected graph contains an Eulerian trail if and only if exactly two vertices have odd degree and rest have even degree.<\/p><p>The two vertices with odd degree must be the terminal vertices in the trail.<\/p><\/div><p>Note the equivalency (<i>if and only if<\/i>) in the above result.<\/p><p>Draw Eulerian trails for the given connected graphs.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul> <li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><li>To start a walk, click on any edge.<\/li><li>The <span style=\"background-color: #ff0; padding: 2px;\">first<\/span> and <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertices of walk have colored boundaries.<\/li><li>To add next edge to the walk, click on an edge falling on the <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> vertex of the walk.<\/li><li>The <span style=\"background-color: #8f3; padding: 2px;\">last<\/span> edge in the walk can be removed by again clicking on it.<\/li><li>You won't be able to delete vertices\/edges which are a part of walk.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"clear-walk\" class=\"btn btn-default\">Clear Walk<\/button> <button type=\"button\" id=\"reverse-walk\" class=\"btn btn-default\">Reverse Walk<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><\/ul> <\/div>",

		"prev":		"?eulerian-circuit",
		"next":		"?graph-coloring",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"graph-coloring": {

		"content-title": "着色问题",

		"theory-content":		"<p><b>Graph coloring<\/b> is the assignment of colors to each vertex in a graph such that no two adjacent vertices get the same color.<\/p><p>Sometimes, this is also referred to as <b>proper coloring<\/b> of graph.<\/p><p>You can change color of a vertex by left-clicking on it. In this unit you have 10 colors available for each vertex.<\/p><p>Try your hands on the graph and see it for yourself!<\/p>",

		"interface-title":		"操作方式：",

		"interface-content":		"<ul> <li>通过<b>左键点击<\/b>空白处创建新顶点。<\/li><li>通过从一个顶点 <b>拖动<\/b> 到另一个顶点来创建一条边。<\/li><li>通过<b>右键点击<\/b>删除顶点或者边。<\/li><li>通过<b>按住 Ctrl 键并拖动<\/b>顶点来移动顶点。<\/li><li>将<b>鼠标悬浮<\/b>于顶点或者边上将显示它的名称。<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">清空</button>",

		"svg-output": "",

		"prev":		"?eulerian-trail",
		"next":		"?k-colorable",
		"script":	"app.js",
		"star":		"n",
		"style":	"app.css"
	},

	"k-colorable": {

		"content-title": "k-色图",

		"theory-content":		"<p>A graph is said to be \\(k\\mbox{-}\\)<b>colorable<\/b> if it can be properly colored using \\(k\\) colors.<\/p><p>For example, a <a href=\"?bipartite\">bipartite graph<\/a> is \\(2\\mbox{-}\\)colorable. To see this, just assign two different colors to the two disjoint sets in a bipartite graph.<\/p><p>Conversely, if a graph is \\(2\\mbox{-}\\)colorable, then the vertices having same color can be taken as disjoint sets. Hence, we arrive at the following result:<\/p><div class=\"result\"><span class=\"result-word\">Theorem: <\/span>A graph is bipartite if and only if it is \\(2\\mbox{-}\\)colorable.<\/div><p>Now, consider a graph that is \\(k\\mbox{-}\\)colored. Choose any one vertex of the graph and replace it's color by a new \\(\\left(k+1\\right)\\)<sup>th<\/sup> color. Clearly, the graph is still properly colored.<\/p><div class=\"note\"><span class=\"note-word\">Note: <\/span>If a graph is \\(k\\mbox{-}\\)colorable, then it is also \\(\\left(k+n\\right)\\mbox{-}\\)colorable, \\(n \\geq 1\\).<\/div><p>Another thing worth noticing is that a graph is \\(1\\mbox{-}\\)colorable if and only if it is totally disconnected, that is all its vertices are isolated.<\/p><p>In each of the following excercises, you're given a graph and a limited number of colors. Your task is to color the graphs (properly). Try to <b>minimize<\/b> the number of colors you use.<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To change <span style=\"color:#fff; background-color:#d62728; padding:0 2px;\">color<\/span> of a vertex <b>left click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><li><a>9<\/a><\/li><li><a>10<\/a><\/li><\/ul> <\/div>",

		"prev":		"?graph-coloring",
		"next":		"?chromatic-number",
		"script":	"app.js",
		"star":		"y",
		"style":	"app.css"
	},

	"chromatic-number": {

		"content-title": "色数",

		"theory-content":		"<p><b>Chromatic number<\/b> of a graph is the minimum value of \\(k\\) for which the graph is \\(k\\mbox{-}colorable\\).<\/p><p>In other words, it is the minimum number of colors needed for a proper-coloring of the graph.<\/p><p>Chromatic number of a graph \\(G\\) is denoted by \\(\\chi(G)\\). And a graph with \\(\\chi(G)=k\\) is called a <b>\\(k\\mbox{-}\\)chromatic<\/b> graph.<\/p><p>You might have noticed in the previous chapter (on <a href=\"?k-colorable\">k-Colorable Graphs<\/a>) that some of the problems involved chromatic coloring.<\/p><p>Now we take a look at some common types of graph and their chromatic numbers.<\/p><p><b><a href=\"javascript:setGraph(0);\">Empty Graph<\/a>:<\/b> It's a graph without any edges (\\(|E|=0\\)). All the vertices are isolated. \\(\\chi(G)=1\\). Note that an empty graph is also <a href=\"?bipartite\">bipartite<\/a>.<\/p><p><b><a href=\"javascript:setGraph(1);\">Bipartite Graph<\/a>:<\/b> An empty bipartite graph has \\(\\chi(G)=1\\). A non-empty bipartite graph has \\(\\chi(G)=2\\). Using this, we arrive at the following result.<\/p><div class=\"result\"><span class=\"result-word\">Theorem:<\/span> A graph \\(G\\) is bipartite if and only if \\(\\chi(G)\\leq2\\).<br><br><p>This can be easily established by observing that any graph with \\(\\chi(G)\\leq2\\) is \\(2\\mbox{-}\\)colorable, and hence bipartite. The converse, has already been established earlier.<\/p><\/div><p><b><a href=\"javascript:setGraph(2);\">Star Graph<\/a>:<\/b> A star graph of order \\(n+1\\), denoted by \\(S_{n+1}\\), is the complete bipartite graph \\(K_{1,n}\\), where \\(n\\geq0\\). So, it has same chromatic number as a bipartite graph.<\/p><p><b><a href=\"javascript:setGraph(3);\">Cycle graph<\/a>:<\/b> A cycle graph of order \\(n\\) is denoted by \\(C_n\\). A cycle of odd order has \\(\\chi(C_{2n+1})=3\\), and that of even order has \\(\\chi(C_{2n})=2\\). So, a cycle of even order is also bipartite.<\/p><p><b><a href=\"javascript:setGraph(5);\">Wheel graph<\/a>:<\/b> A wheel graph of order \\(n+1\\) is obtained from \\(C_n\\) by connecting all its vertices to a new vertex (called <em>hub<\/em>). Wheel graph of order \\(n\\) is denoted by \\(W_n\\). A wheel of odd order has \\(\\chi(W_{2n+1})=4\\), and that of even order has \\(\\chi(W_{2n})=3\\).<\/p><p><b><a href=\"javascript:setGraph(7);\">Complete Graph<\/a>:<\/b> Since each vertex is connected to every other vertex, we have \\(\\chi(K_n)=n\\).<\/p>",

		"interface-title":		"App interface:",

		"interface-content":		"<ul><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

		"svg-buttons":		"<button type=\"button\" id=\"prev-prob\" class=\"btn btn-default\">Prev<\/button> <button type=\"button\" id=\"next-prob\" class=\"btn btn-default\">Next<\/button>",

		"svg-output": "<div id=\"output-text\"><\/div><div class=\"text-center\"> <ul class=\"pagination\" id=\"prob-list\"> <li><a class=\"prob-current\">1<\/a><\/li><li><a>2<\/a><\/li><li><a>3<\/a><\/li><li><a>4<\/a><\/li><li><a>5<\/a><\/li><li><a>6<\/a><\/li><li><a>7<\/a><\/li><li><a>8<\/a><\/li><\/ul> <\/div>",

		"prev":		"?k-colorable",
        "next":		"?trees",
        "script":	"app.js",
        "star":		"n",
        "style":	"app.css"
    },

    "trees": {

        "content-title": "Trees",

        "theory-content":		"<p>It's time to learn about trees. Trees are special type of graphs which have immense application as a data structure in computational sciences.<\/p><p>But first, we talk about forests.<\/p><p>A <b>forest<\/b> is an acyclic graph, that is a graph without any cycles. It can be a single connected graph or have multiple disconnected components. When its a single connected graph, we call it a tree.<\/p><p>So, a <b>tree<\/b> is a connected acyclic graph. And a forest is just a collection of one or more trees.<\/p><p>Play around to see what is a tree and what is not. And try to observe the following properties as you draw things.<\/p><div class=\"result\"><span class=\"result-word\">Theorem:<\/span> A connected graph is a tree iff its order is one more than its size. In mathematical notation, we can write this as \\[|V|=|E|+1\\]<p>Note that statement is biconditional. So it also says that a connected graph satisfying the above equation is a tree.<\/p><\/div><div class=\"result\"><span class=\"result-word\">Property:<\/span> For a tree with more than one vertices, there is a <b>unique path<\/b> between any two of its vertices.<\/div><div class=\"result\"><span class=\"result-word\">Property:<\/span> A tree is <b>minimally connected<\/b>, which means that removal of any arbitrary edge from it will convert it into a disconnected graph.<\/div>",

        "interface-title":		"App interface:",

        "interface-content":		"<ul><li>To add a vertex <b>left click<\/b> on whitespace.<\/li><li>To add an edge <b>drag<\/b> from one vertex to another.<\/li><li>To delete a vertex\/edge <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see name of a vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

        "svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear All<\/button>",

        "svg-output": "",

        "prev":		"?chromatic-number",
        "next":		"?rooted-trees",
        "script":	"app.js",
        "star":		"n",
        "style":	"app.css"
    },

    "rooted-trees": {

        "content-title": "Rooted Trees",

        "theory-content":		"<p>A <b>rooted tree<\/b> is a tree with a special vertex labelled as the \"root\" the of tree.<\/p><p>The root serves as a point of reference for other vertices in the tree. In diagrams, we usually keep the root at the top and list other vertices below it.<\/p><p>This notion is particularly useful in computer science for working with tree-based data structures.<\/p><p>In the figure, the root vertex is shown with a black border.<\/p><p>Below are some useful terms associated with rooted trees.<\/p><p><b>Branch<\/b> is just another name given to edges of the tree.<\/p><p><b>Depth of a vertex<\/b> is the number of branches in the path from root to the vertex. So depth of the root itself is zero.<\/p><p><b>Level of a vertex<\/b> is number of vertex in the path from root to the vertex. This is just one more than the depth of the vertex. Level of root is 1.<\/p><p><b>Child of a vertex \\(v_1\\)<\/b> is any vertex \\(v_2\\) connected to it such that \\(d(v_2)=d(v_1)+1\\), where \\(d(v)\\) denotes depth of vertex \\(v\\). \\(v_1\\) is called <b>parent<\/b> of \\(v_2\\). Usually, in diagrams, we keep the parent vertex above its child vertices.<\/p><div class=\"note\"><span class=\"note-word\">Note:<\/span> There can be multiple childs of a vertex, but parent of a vertex is unique. Root is the only vertex in a tree without any parent.<\/div><p>A <b>leaf<\/b> is a vertex without any child.<\/p><p><b>Height of tree<\/b> is the maximum value of depth for any vertex in the tree.<\/p><p>Play around to get yourself familiar with these terms. By the way, did you notice something about the colors?<\/p><div class=\"result\"><p><span class=\"result-word\">Theorem:<\/span> All tree graphs are bipartite.<\/p><p>This can be easily seen by coloring all the vertices at even depth in a color, say pink, and coloring the vertices at odd depth in another color, say cyan. So, any tree is 2-colorable.<\/p><\/div>",

        "interface-title":		"App interface:",

        "interface-content":		"<ul><li>To add a child to a vertex <b>left click<\/b> on it.<\/li><li>To delete a non-root vertex and all its descendents <b>right click<\/b> on it.<\/li><li>To move a vertex <b>hold Ctrl and drag<\/b> it.<\/li><li>To see details of vertex\/edge just <b>hover your cursor<\/b> on it.<\/li><\/ul>",

        "svg-buttons":		"<button type=\"button\" id=\"clear-graph\" class=\"btn btn-default\">Clear Graph<\/button>",

        "svg-output": "",

        "prev":		"?trees",
        "next":		"",
        "script":	"app.js",
        "star":		"n",
        "style":	"app.css"
    }

};

