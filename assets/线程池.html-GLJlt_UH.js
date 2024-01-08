import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-SIJWuOyB.js";const t={},p=e(`<h1 id="线程池" tabindex="-1"><a class="header-anchor" href="#线程池" aria-hidden="true">#</a> 线程池</h1><h2 id="线程池设计思想" tabindex="-1"><a class="header-anchor" href="#线程池设计思想" aria-hidden="true">#</a> 线程池设计思想</h2><p>Java线程池的设计思想是为了提高线程的使用效率和响应能力，以及降低资源消耗和线程管理的复杂度。<br> Java线程池主要具有以下设计思想：</p><ol><li>重复使用线程：Java线程池中的线程可以被重复使用，而不是为每个任务创建一个新的线程。这样可以避免线程的创建和销毁带来的开销，提高程序的性能。</li><li>控制资源消耗：Java线程池可以控制线程的数量，从而控制程序对系统资源的消耗。当线程数量过多时，可以避免过多的线程同时占用资源，导致资源浪费和系统负载过高。</li><li>提高响应能力：Java线程池可以快速响应任务的提交和执行，从而提高程序的响应能力。当有新的任务提交时，线程池可以立即分配线程执行任务，而不用等待新的线程创建和就绪。</li><li>任务执行管理：Java线程池可以对任务的执行进行管理，例如控制任务的执行顺序、限制任务的执行时间、处理任务的异常等。这样可以保证任务的执行质量，并提高程序的可靠性。</li></ol><p>Java线程池通过ThreadPoolExecutor类来实现，该类提供了可重用的线程池，并提供了丰富的配置选项，可以根据实际需要来配置线程池的参数，以达到最佳的性能和效果。<br> Java线程池的设计思想是基于生产者-消费者模式，通过工作线程来执行任务，从而实现高效的并发处理。</p><h2 id="如何停止线程池中的线程" tabindex="-1"><a class="header-anchor" href="#如何停止线程池中的线程" aria-hidden="true">#</a> 如何停止线程池中的线程</h2><p>在Java中，线程池中的线程是并发执行的，不支持直接停止某一个线程。但是可以通过以下几种方式中断线程的执行：</p><ol><li>使用线程的interrupt方法中断线程</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ExecutorService executor = Executors.newFixedThreadPool(5);
Future future = executor.submit(() -&gt; {
    while (!Thread.currentThread().isInterrupted()) {
        // 执行任务
    }
});
// 停止某个线程
executor.shutdownNow();
future.cancel(true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用线程的interrupted方法检查中断标志位</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ExecutorService executor = Executors.newFixedThreadPool(5);
Future future = executor.submit(() -&gt; {
    while (!Thread.currentThread().isInterrupted()) {
        // 执行任务
    }
});
// 停止某个线程
executor.shutdownNow();
if (Thread.interrupted()) {
    // 中断标志位为true表示被中断
    // 处理中断逻辑
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>使用线程的isInterrupted方法检查中断状态</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ExecutorService executor = Executors.newFixedThreadPool(5);
Future future = executor.submit(() -&gt; {
    while (!Thread.currentThread().isInterrupted()) {
        // 执行任务
    }
});
// 停止某个线程
executor.shutdownNow();
if (Thread.interrupted()) {
    // 中断标志位为true表示被中断
    // 处理中断逻辑
    Thread.currentThread().interrupt();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>concurrent<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">ExecutorService</span> executor <span class="token operator">=</span> <span class="token class-name">Executors</span><span class="token punctuation">.</span><span class="token function">newSingleThreadExecutor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Future</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> future <span class="token operator">=</span> executor<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isInterrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Working...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">interrupt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">return</span> <span class="token string">&quot;Done&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Future status: &quot;</span> <span class="token operator">+</span> future<span class="token punctuation">.</span><span class="token function">isDone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Try to cancel future...&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        future<span class="token punctuation">.</span><span class="token function">cancel</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Future status: &quot;</span> <span class="token operator">+</span> future<span class="token punctuation">.</span><span class="token function">isCancelled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Future result: &quot;</span> <span class="token operator">+</span> future<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        executor<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="线程池的核心参数" tabindex="-1"><a class="header-anchor" href="#线程池的核心参数" aria-hidden="true">#</a> 线程池的核心参数</h2><p>线程池的核心参数如下：</p><ul><li><code>corePoolSize</code>：核心线程数，即线程池维护的最低线程数。</li><li><code>maximumPoolSize</code>：最大线程数，即线程池维护的最大线程数。</li><li><code>keepAliveTime</code>：线程空闲 timeout，即线程空闲 timeout 时间。</li><li><code>unit</code>：时间单位。</li><li><code>workQueue</code>：任务队列，用于保存等待线程执行的任务。</li><li><code>threadFactory</code>：线程工厂，用于创建新线程。</li><li><code>handler</code>：拒绝执行策略，当任务队列和线程池都达到最大容量时，将执行任务的续行策略。</li></ul>`,17),c=[p];function i(o,u){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","线程池.html.vue"]]);export{d as default};
